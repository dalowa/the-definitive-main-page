"use client";

import React, { useState, FormEvent } from "react";
import { PlusIcon, XIcon } from "@/components/ui/icons";
import { Categories, Category, Priority, TaskObject } from "@/types/task";
import { useTasksListStore } from "@/store/tasksListStore";
import { convertTo24HourFormat, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TaskForm() {
  const { addTask, deleteAll } = useTasksListStore();
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    category: "WORK" as Category,
    priority: "MEDIUM" as Priority,
    hour: "12",
    minute: "00",
    period: "AM"
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.description.trim() || !formData.date) {
      alert("Please fill in all required fields");
      return;
    }

    const timeString = convertTo24HourFormat(
      Number(formData.hour),
      Number(formData.minute),
      formData.period
    );
    
    const dateTime = `${formData.date}T${timeString}:00`;
    
    const newTask: Omit<TaskObject, 'id' | 'importantNumber' | 'createdAt' | 'updatedAt'> = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      priority: formData.priority,
      dateLimit: dateTime,
      status: 'PENDING'
    };

    addTask(newTask as TaskObject);
    
    // Reset form
    setFormData({
      name: "",
      description: "",
      date: "",
      category: "WORK",
      priority: "MEDIUM",
      hour: "12",
      minute: "00",
      period: "AM"
    });
    
    setIsExpanded(false);
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
      deleteAll();
    }
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
      >
        <PlusIcon className="h-4 w-4" />
        <span>Add Task</span>
      </button>
    );
  }

  return (
    <Card className="w-full max-w-md bg-black shadow-lg border-red-800">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-red-100">
            Create New Task
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(false)}
            className="h-8 w-8"
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task Name */}
          <div>
            <label className="block text-sm font-medium text-red-300 mb-1">
              Task Name *
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter task name"
              className="w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-red-300 mb-1">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter task description"
              rows={3}
              className="w-full px-3 py-2 border border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-black text-red-100"
              required
            />
          </div>

          {/* Category and Priority */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-red-300 mb-1">
                Category
              </label>
              <select
                title="categories"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-black text-red-100"
              >
                {Categories.map((category) => (
                  <option key={category} value={category}>
                    {category.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-red-300 mb-1">
                Priority
              </label>
              <select
                title="categories"
                value={formData.priority}
                onChange={(e) => handleInputChange('priority', e.target.value as Priority)}
                className="w-full px-3 py-2 border border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-black text-red-100"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-red-300 mb-1">
              Due Date *
            </label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="w-full"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-red-300 mb-1">
              Due Time
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select
                title="form"
                value={formData.hour}
                onChange={(e) => handleInputChange('hour', e.target.value)}
                className="px-3 py-2 border border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-black text-red-100"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map(hour => (
                  <option key={hour} value={hour.toString()}>
                    {hour.toString().padStart(2, '0')}
                  </option>
                ))}
              </select>
              
              <select
                title="categories"
                value={formData.minute}
                onChange={(e) => handleInputChange('minute', e.target.value)}
                className="px-3 py-2 border border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-black text-red-100"
              >
                {['00', '15', '30', '45'].map(minute => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
              
              <select
                title="categories"
                value={formData.period}
                onChange={(e) => handleInputChange('period', e.target.value)}
                className="px-3 py-2 border border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-black text-red-100"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <PlusIcon className="h-4 w-4 mr-1" />
              Create Task
            </Button>
            
            <Button
              type="button"
              variant="destructive"
              onClick={handleClearAll}
              className="px-4"
            >
              Clear All
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}