"use client";

import React from "react";
import { useTasksListStore } from "@/store/tasksListStore";
import { TaskObject, TaskStatus } from "@/types/task";
import { Card } from "@/components/ui/card";

interface TaskStats {
  pending: number;
  completed: number;
  overdue: number;
  inProgress: number;
}

export default function TaskStats() {
  const { tasksList } = useTasksListStore();

  const calculateStats = (): TaskStats => {
    const now = new Date();
    
    return tasksList.reduce((stats, task: TaskObject) => {
      const taskDate = new Date(task.dateLimit);
      const isOverdue = taskDate < now && task.status !== "COMPLETED";
      
      switch (task.status) {
        case "COMPLETED":
          stats.completed++;
          break;
        case "IN_PROGRESS":
          stats.inProgress++;
          break;
        case "PENDING":
        default:
          if (isOverdue) {
            stats.overdue++;
          } else {
            stats.pending++;
          }
          break;
      }
      
      return stats;
    }, { pending: 0, completed: 0, overdue: 0, inProgress: 0 });
  };

  const stats = calculateStats();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Pending Tasks */}
      <Card className="p-4 bg-gray-900 border-red-800">
        <div className="text-center">
          <div className="text-sm text-red-400 mb-1">Pending</div>
          <div className="text-2xl font-bold text-red-100">{stats.pending}</div>
        </div>
      </Card>

      {/* In Progress Tasks */}
      <Card className="p-4 bg-red-900 border-red-700">
        <div className="text-center">
          <div className="text-sm text-red-300 mb-1">In Progress</div>
          <div className="text-2xl font-bold text-red-100">{stats.inProgress}</div>
        </div>
      </Card>

      {/* Completed Tasks */}
      <Card className="p-4 bg-black border-red-600">
        <div className="text-center">
          <div className="text-sm text-red-300 mb-1">Completed</div>
          <div className="text-2xl font-bold text-red-100">{stats.completed}</div>
        </div>
      </Card>

      {/* Overdue Tasks */}
      <Card className="p-4 bg-red-800 border-red-500">
        <div className="text-center">
          <div className="text-sm text-red-200 mb-1">Overdue</div>
          <div className="text-2xl font-bold text-white">{stats.overdue}</div>
        </div>
      </Card>
    </div>
  );
}