"use client";

import React from "react";
import { TrashIcon, ClockIcon, CheckCircleIcon, CircleIcon, AlertCircleIcon } from "@/components/ui/icons";
import { TaskObject, categoriesConfig, priorityConfig } from "@/types/task";
import { useTasksListStore } from "@/store/tasksListStore";
import { formatDate, isOverdue, getTimeUntilDeadline, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TaskCardProps {
  task: TaskObject;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { deleteTask, updateTask } = useTasksListStore();
  
  const categoryConfig = categoriesConfig[task.category];
  const priorityColor = priorityConfig[task.priority || 'MEDIUM'];
  const overdue = isOverdue(task.dateLimit);
  const hoursUntilDeadline = getTimeUntilDeadline(task.dateLimit);

  const toggleStatus = () => {
    const newStatus = task.status === 'COMPLETED' ? 'PENDING' : 'COMPLETED';
    updateTask(task.id, { status: newStatus });
  };

  const getStatusIcon = () => {
    if (task.status === 'COMPLETED') {
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    }
    return <CircleIcon className="h-5 w-5 text-gray-400" />;
  };

  const getUrgencyColor = () => {
    if (overdue) return "border-l-red-400";
    if (hoursUntilDeadline <= 24) return "border-l-red-500";
    if (hoursUntilDeadline <= 72) return "border-l-red-600";
    return "border-l-red-800";
  };

  return (
    <Card className={`
      w-full transition-all duration-200 hover:shadow-lg border-l-4 
      ${getUrgencyColor()} 
      ${task.status === 'COMPLETED' ? 'opacity-60' : ''}
      bg-black
    `}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleStatus}
              className="transition-colors hover:scale-110"
            >
              {getStatusIcon()}
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-lg">{categoryConfig.icon}</span>
              <span className={`
                 px-2 py-1 rounded-full text-xs text-red-100 font-medium bg-red-900/50 border border-red-700
              `}>
                {categoryConfig.label}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={`text-xs font-medium text-red-300`}>
              {priorityConfig[task.priority || 'MEDIUM'].label}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTask(task.id)}
              className="h-8 w-8 text-red-400 hover:text-red-500"
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <h3 className={`
          font-semibold text-lg mb-2 
          ${task.status === 'COMPLETED' ? 'line-through text-red-600' : 'text-red-100'}
        `}>
          {task.name}
        </h3>
        
        <p className="text-red-300 text-sm mb-3 line-clamp-2">
          {task.description}
        </p>

        <div className="flex items-center justify-between text-xs text-red-400">
          <div className="flex items-center space-x-1">
            <ClockIcon className="h-3 w-3" />
            <span>{formatDate(task.dateLimit)}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {overdue ? (
              <>
                <AlertCircleIcon className="h-3 w-3 text-red-400" />
                <span className="text-red-400 font-medium">
                  {Math.abs(hoursUntilDeadline)}h overdue
                </span>
              </>
            ) : (
              <span className={
                hoursUntilDeadline <= 24 ? 'text-red-300 font-medium' : 'text-red-400'
              }>
                {hoursUntilDeadline}h remaining
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}