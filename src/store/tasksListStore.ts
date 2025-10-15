import { TaskObject, Priority, TaskStatus } from '@/types/task';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TaskListStorage {
  tasksList: TaskObject[];
  taskNumber: number;
  filter: {
    category?: string;
    status?: TaskStatus;
    priority?: Priority;
  };
  addTask: (task: TaskObject) => void;
  updateTask: (id: number, updates: Partial<TaskObject>) => void;
  deleteTask: (id: number) => void;
  deleteAll: () => void;
  setFilter: (filter: Partial<TaskListStorage['filter']>) => void;
  clearFilter: () => void;
}

const calculateImportantNumber = (dateLimit: string): number => {
  const now = new Date().getTime();
  const deadline = new Date(dateLimit).getTime();
  return Math.round((deadline - now) / (1000 * 60 * 60));
};

const sortTasksByImportance = (tasks: TaskObject[]): TaskObject[] => {
  return tasks.sort((a, b) => a.importantNumber - b.importantNumber);
};

export const useTasksListStore = create(
  persist<TaskListStorage>(
    (set, get) => ({
      tasksList: [],
      taskNumber: 1000,
      filter: {},
      
      addTask: (task: TaskObject) => {
        const { tasksList, taskNumber } = get();
        const now = new Date().toISOString();
        
        const newTask: TaskObject = {
          ...task,
          id: taskNumber,
          importantNumber: calculateImportantNumber(task.dateLimit),
          status: task.status || 'PENDING',
          priority: task.priority || 'MEDIUM',
          createdAt: now,
          updatedAt: now,
        };
        
        const updatedTasks = [...tasksList, newTask].map(t => ({
          ...t,
          importantNumber: calculateImportantNumber(t.dateLimit)
        }));
        
        set({
          tasksList: sortTasksByImportance(updatedTasks),
          taskNumber: taskNumber + 1
        });
      },
      
      updateTask: (id: number, updates: Partial<TaskObject>) => {
        const { tasksList } = get();
        const now = new Date().toISOString();
        
        const updatedTasks = tasksList.map(task => {
          if (task.id === id) {
            const updatedTask = { ...task, ...updates, updatedAt: now };
            if (updates.dateLimit) {
              updatedTask.importantNumber = calculateImportantNumber(updates.dateLimit);
            }
            return updatedTask;
          }
          return task;
        });
        
        set({ tasksList: sortTasksByImportance(updatedTasks) });
      },
      
      deleteTask: (id: number) => {
        const { tasksList } = get();
        set({ tasksList: tasksList.filter(task => task.id !== id) });
      },
      
      deleteAll: () => {
        set({ tasksList: [] });
      },
      
      setFilter: (filter: Partial<TaskListStorage['filter']>) => {
        const { filter: currentFilter } = get();
        set({ filter: { ...currentFilter, ...filter } });
      },
      
      clearFilter: () => {
        set({ filter: {} });
      }
    }),
    {
      name: "tasks-dalowa",
      version: 1,
      migrate: (persistedState: any, version: number) => {
        // Si no hay versión o la versión es 0, significa que son datos del formato anterior
        if (version === 0 || !version) {
          return {
            tasksList: persistedState.tasksList?.map((task: any) => ({
              ...task,
              priority: task.priority || 'MEDIUM',
              status: task.status || 'PENDING',
              createdAt: task.createdAt || new Date().toISOString(),
              updatedAt: task.updatedAt || new Date().toISOString(),
            })) || [],
            taskNumber: persistedState.taskNumber || 1000,
            filter: {}
          };
        }
        return persistedState;
      },
    }
  )
);