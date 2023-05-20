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
    <>
      <TaskForm />
      <div className="flex w-full max-w-sm flex-col bg-black p-5 rounded-lg border-2 border-gray-50 justify-center items-center ">
        <h2 className="text-slate-100 font-bebas text-3xl">Task List</h2>
        <h4 className="text-slate-100 font-dm text-xl">{`Current pending tasks: ${taskList?.length}`}</h4>
        <div className="flex w-full flex-col bg-black py-5 px-5 border-2 border-gray-50 my-5 gap-4 max-h-96 overflow-auto">
          {taskList?.map((e) => (
            <Task
              category={e.category}
              description={e.description}
              name={e.name}
              importantNumber={e.importantNumber}
              id={e.id}
              key={e.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
