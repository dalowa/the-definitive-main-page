"use client";

import { useTasksListStore } from "@/store/tasksListStore";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";
import { Task as Taskk } from "@/classes/Task";

export default function TaskList() {
  const lista = useTasksListStore((state) => state.tasksList);

  const [taskList, setTaskList] = useState<Taskk[]>();
  useEffect(() => {
    setTaskList(lista);
  }, [lista]);
  return (
    <div
      className="
      w-full flex max-w-sm flex-col justify-center items-center py-5 px-5 gap-5 
      md:flex-row md:gap-2 md:max-w-4xl
      xl:max-w-6xl

      "
    >
      <TaskForm />
      <div
        className="
      flex w-full h-140 flex-col bg-black p-5 rounded-lg border-2 border-gray-50 justify-center items-center 
      md:h-140 md:w-1/2
      "
      >
        <h2 className="text-slate-100 font-bebas text-3xl xl:text-4xl">
          Task List
        </h2>
        <h4 className="text-slate-100 font-dm text-xl xl:text-2xl">{`Current pending tasks: ${taskList?.length}`}</h4>
        <div className="flex w-full flex-col bg-black py-5 px-5 border-2 border-gray-50 my-5 gap-4 h-full overflow-auto items-center">
          {taskList?.map((e) => (
            <Task
              category={e.category}
              description={e.description}
              name={e.name}
              deadline={e.dateLimit}
              importantNumber={e.importantNumber}
              /* tailwindColor={e.tailwindColor} */
              id={e.id}
              key={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
