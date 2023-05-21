"use client";

import { Category, categoriesColors } from "@/classes/Task";

import { useTasksListStore } from "@/store/tasksListStore";
import CategoryTitle from "./CategoryTitle";
import { useState } from "react";

interface Task {
  category: Category;
  name: string;
  description: string;
  importantNumber: number;
  deadline: string | Date;
  id: number;
}

export default function Task({
  category,
  name,
  description,
  importantNumber,
  deadline,
  id,
}: Task) {
  const deleteTask = useTasksListStore((state) => state.deleteTask);

  const [date, setDate] = useState<Date>(new Date(deadline));

  const handleClick = () => {
    deleteTask(id);
  };

  return (
    <div className="text-white bg-black border-2 py-2 px-3 rounded-lg flex flex-col gap-2 w-full">
      <div className="flex flex-col justify-center items-center">
        <CategoryTitle cat={category} />
        <h2 className="font-right text-left w-full uppercase">{name}</h2>
      </div>
      <p className="font-dm">{description}</p>
      <span className="text-right font-mono tracking-wides text-base">{`Deadline: ${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}</span>
      <button
        className="text-black bg-white border border-white px-2 py-1 rounded-lg transition-colors hover:bg-black hover:text-white duration-300 my-2"
        onClick={handleClick}
      >
        Complete Task
      </button>
    </div>
  );
}
