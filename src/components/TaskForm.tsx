"use client";

import { Categories, Category, Task } from "@/classes/Task";
import { useTasksListStore } from "@/store/tasksListStore";
import { useState } from "react";

export default function TaskForm() {
  const taskId = useTasksListStore((state) => state.taskNumber);
  const addTask = useTasksListStore((state) => state.addTask);
  const taskList = useTasksListStore((state) => state.tasksList);

  const deleteAll = useTasksListStore((state) => state.deleteAll);

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<Category | string>("STUDY");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      category != undefined &&
      name != undefined &&
      description != undefined &&
      date != undefined &&
      category != "" &&
      name != "" &&
      description != "" &&
      date != ""
    ) {
      const fecha = new Date(String(date) + "T00:00:00");
      const nuevo = new Task(category, name, description, fecha, taskId);
      addTask(nuevo);
      setName("");
      setDescription("");
      setDate("");
    } else {
      console.log("No está completo");
      console.log(date);
    }
  };

  const handleChange =
    (setState: (e: any) => void) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setState(event.target.value);
    };

  const handleDelete = () => {
    deleteAll([]);
  };
  return (
    <div className="flex w-full max-w-sm flex-col bg-black p-5 rounded-lg border-2 border-gray-50">
      <form
        className="text-slate-100 w-full font-dm flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-slate-100 p-2 font-bebas tracking-widest text-2xl">
          Create a new Task
        </h1>
        <div className="flex justify-between items-center text-sm">
          <label htmlFor="taskName">Name:</label>
          <input
            id="taskName"
            type="text"
            className="text-black focus:outline-none py-1 px-2 border box-border bg-slate-100 rounded-lg"
            onChange={handleChange(setName)}
            value={name}
            autoComplete="off"
          />
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm">
          <label htmlFor="taskDescription">Description:</label>
          <textarea
            id="taskDescription"
            title="task description"
            className="text-black focus:outline-none py-1 px-2 border box-border bg-slate-100 rounded-lg"
            onChange={handleChange(setDescription)}
            value={description}
            autoComplete="off"
          />
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm">
          <label htmlFor="taskDate">Deadline:</label>
          <input
            id="taskDate"
            type="date"
            className="text-black py-1 px-2 border box-border bg-slate-100   rounded-lg"
            onChange={handleChange(setDate)}
            value={date}
            /* onChange={(e) =>
              console.log(new Date(String(e.target.value) + "T00:00:00"))
            } */
          />
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm">
          <label htmlFor="taskCategory">Category:</label>
          <select
            id="taskCategory"
            className="text-black py-1 px-2 border box-border bg-slatwhite rounded-lg"
            onChange={handleChange(setCategory)}
            value={category}
          >
            {Categories.map((e, i) => (
              <option key={i}>{e}</option>
            ))}
          </select>
        </div>
        <hr />
        <div className="flex justify-between">
          {/* <div></div> */}
          <button
            type="submit"
            className="text-white bg-black border border-white px-2 py-1 rounded-lg transition-colors hover:bg-white hover:text-black duration-300"
          >
            Create Task
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="text-white bg-black border border-white px-2 py-1 rounded-lg transition-colors hover:bg-white hover:text-black duration-300"
          >
            Delete All
          </button>
        </div>
      </form>
    </div>
  );
}
