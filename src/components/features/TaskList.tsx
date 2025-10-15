"use client";

import React from "react";
import { useTasksListStore } from "@/store/tasksListStore";
import { TaskObject } from "@/types/task";
import { CheckCircleIcon, CircleIcon, EditIcon, TrashIcon } from "@/components/ui/icons";
import { categoriesConfig } from "@/types/task";

export default function TaskList() {
  const { tasksList, updateTask, deleteTask } = useTasksListStore();

  const toggleTaskStatus = (task: TaskObject) => {
    const newStatus = task.status === 'COMPLETED' ? 'PENDING' : 'COMPLETED';
    updateTask(task.id, { status: newStatus });
  };

  const getTodayTasks = () => {
    const today = new Date().toDateString();
    return tasksList.filter(task => {
      const taskDate = new Date(task.dateLimit).toDateString();
      return taskDate === today || task.status === 'IN_PROGRESS';
    }).slice(0, 6); // Limit to 6 tasks as shown in design
  };

  const todayTasks = getTodayTasks();

  if (todayTasks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No tasks for today</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todayTasks.map((task: TaskObject) => {
        const categoryConfig = categoriesConfig[task.category];
        
        return (
          <div
            key={task.id}
            className="flex items-center space-x-4 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {/* Status Toggle */}
            <button
              onClick={() => toggleTaskStatus(task)}
              className="flex-shrink-0"
            >
              {task.status === 'COMPLETED' ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              ) : (
                <CircleIcon className="h-5 w-5 text-gray-400 hover:text-green-500" />
              )}
            </button>

            {/* Task Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className={`font-medium text-white ${task.status === 'COMPLETED' ? 'line-through opacity-60' : ''}`}>
                  {task.name}
                </h3>
              </div>
            </div>

            {/* Category Badge */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span 
                className={`px-2 py-1 text-xs rounded-full text-white ${getCategoryColorClass(task.category)}`}
              >
                {getCategoryLabel(task.category)}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button
                title="Edit task"
                onClick={() => {/* TODO: Add edit functionality */}}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <EditIcon className="h-4 w-4" />
              </button>
              <button
                title="Delete task"
                onClick={() => deleteTask(task.id)}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getCategoryColorClass(category: string): string {
  const colors: Record<string, string> = {
    'WORK': 'bg-yellow-600',
    'STUDY': 'bg-blue-600', 
    'HOME': 'bg-pink-600',
    'HEALTH_AND_WELLNESS': 'bg-red-600',
    'FINANCES': 'bg-green-600',
    'SOCIAL': 'bg-orange-600',
    'LEISURE': 'bg-purple-600',
    'PERSONAL_PROJECTS': 'bg-indigo-600',
    'ORGANIZATION': 'bg-cyan-600',
    'TECHNOLOGY': 'bg-violet-600'
  };
  return colors[category] || 'bg-gray-600';
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'WORK': 'Work',
    'STUDY': 'Study',
    'HOME': 'Home',
    'HEALTH_AND_WELLNESS': 'Health',
    'FINANCES': 'Finance',
    'SOCIAL': 'Social',
    'LEISURE': 'Leisure',
    'PERSONAL_PROJECTS': 'Project',
    'ORGANIZATION': 'Organize',
    'TECHNOLOGY': 'Tech'
  };
  return labels[category] || category;
}