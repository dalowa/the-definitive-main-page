export type Category = 
  | "WORK"
  | "STUDY" 
  | "HOME"
  | "HEALTH_AND_WELLNESS"
  | "FINANCES"
  | "SOCIAL"
  | "LEISURE"
  | "PERSONAL_PROJECTS"
  | "ORGANIZATION"
  | "TECHNOLOGY";

export type Priority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";

export interface TaskObject {
  id: number;
  category: Category;
  name: string;
  description: string;
  dateLimit: string;
  importantNumber: number;
  priority?: Priority;
  status?: TaskStatus;
  createdAt?: string;
  updatedAt?: string;
}

export const Categories: Category[] = [
  "WORK",
  "STUDY",
  "HOME",
  "HEALTH_AND_WELLNESS",
  "FINANCES",
  "SOCIAL",
  "LEISURE",
  "PERSONAL_PROJECTS",
  "ORGANIZATION",
  "TECHNOLOGY"
];

export const categoriesConfig: Record<Category, { color: string; icon: string; label: string }> = {
  WORK: { color: "border-amber-500 bg-amber-50", icon: "💼", label: "Work" },
  STUDY: { color: "border-blue-500 bg-blue-50", icon: "📚", label: "Study" },
  HOME: { color: "border-pink-500 bg-pink-50", icon: "🏠", label: "Home" },
  HEALTH_AND_WELLNESS: { color: "border-red-500 bg-red-50", icon: "💪", label: "Health & Wellness" },
  FINANCES: { color: "border-green-500 bg-green-50", icon: "💰", label: "Finances" },
  SOCIAL: { color: "border-orange-500 bg-orange-50", icon: "👥", label: "Social" },
  LEISURE: { color: "border-purple-500 bg-purple-50", icon: "🎮", label: "Leisure" },
  PERSONAL_PROJECTS: { color: "border-indigo-500 bg-indigo-50", icon: "🛠️", label: "Personal Projects" },
  ORGANIZATION: { color: "border-cyan-500 bg-cyan-50", icon: "📋", label: "Organization" },
  TECHNOLOGY: { color: "border-violet-500 bg-violet-50", icon: "💻", label: "Technology" }
};

export const priorityConfig: Record<Priority, { color: string; label: string }> = {
  LOW: { color: "text-gray-500", label: "Low" },
  MEDIUM: { color: "text-yellow-500", label: "Medium" },
  HIGH: { color: "text-orange-500", label: "High" },
  URGENT: { color: "text-red-500", label: "Urgent" }
};