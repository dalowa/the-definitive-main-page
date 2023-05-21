"use client";

import { Categories, Category, Task } from "@/classes/Task";
import { useTasksListStore } from "@/store/tasksListStore";
import { useState } from "react";

export default function TaskForm() {
  const taskId = useTasksListStore((state) => state.taskNumber);
  const addTask = useTasksListStore((state) => state.addTask);
  const taskList = useTasksListStore((state) => state.tasksList);
  const updateList = useTasksListStore((state) => state);

  const deleteAll = useTasksListStore((state) => state.deleteAll);

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<Category>("WORK");
  const [dateHour, setDateHour] = useState<string>("12");
  const [dateMinute, setDateMinute] = useState<string>("00");
  const [formatTime, setFormatTime] = useState<string>("AM");

  const convertTo24HourFormat = (
    hour: number,
    minutes: number,
    period: string
  ): string => {
    let hour24 = hour;

    if (period === "PM" && hour !== 12) {
      hour24 += 12;
    } else if (period === "AM" && hour === 12) {
      hour24 = 0;
    }

    const hourString = hour24.toString().padStart(2, "0");
    const minutesString = minutes.toString().padStart(2, "0");

    return `${hourString}:${minutesString}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      category != undefined &&
      name != undefined &&
      description != undefined &&
      date != undefined &&
      name != "" &&
      description != "" &&
      date != ""
    ) {
      const hourandminute = convertTo24HourFormat(
        Number(dateHour),
        Number(dateMinute),
        formatTime
      );
      const fecha = new Date(String(date) + "T" + hourandminute + ":00");
      const nuevo = new Task(category, name, description, fecha, taskId);
      console.log(fecha);

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
    <div
      className="
    flex w-full flex-col bg-black py-3 px-5 rounded-lg border-2 border-gray-50 
    md:h-140 md:pb-10 md:w-1/2
    "
    >
      <form
        className="text-slate-100 w-full font-dm flex flex-col gap-3 md:justify-between md:h-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-slate-100 p-2 font-bebas tracking-widest text-2xl xl:text-3xl">
          Create a new Task
        </h1>
        <div className="flex justify-between items-center text-sm ">
          <label htmlFor="taskName" className="md:text-lg xl:text-2xl">
            Name:
          </label>
          <input
            id="taskName"
            type="text"
            className="text-black focus:outline-none py-1 px-2 border box-border bg-slate-100 rounded-lg xl:text-xl"
            onChange={handleChange(setName)}
            value={name}
            autoComplete="off"
          />
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm">
          <label htmlFor="taskDescription" className="md:text-lg xl:text-2xl">
            Description:
          </label>
          <textarea
            id="taskDescription"
            title="task description"
            className="text-black focus:outline-none py-1 px-2 border box-border bg-slate-100 rounded-lg xl:text-xl"
            onChange={handleChange(setDescription)}
            value={description}
            autoComplete="off"
          />
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm">
          <label htmlFor="taskDate" className="md:text-lg xl:text-2xl">
            Deadline:
          </label>
          <div className="flex flex-col items-center gap-3">
            <input
              id="taskDate"
              type="date"
              className="text-black py-1 px-2 border box-border bg-slate-100  rounded-lg xl:text-xl"
              onChange={handleChange(setDate)}
              value={date}
              /* onChange={(e) =>
              console.log(new Date(String(e.target.value) + "T00:00:00"))
            } */
            />
            <div className="flex">
              <select
                id="taskDeadLineHour"
                title="DeadLineHour"
                className="text-black xl:text-xl"
                value={dateHour}
                onChange={handleChange(setDateHour)}
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <p>:</p>
              <select
                id="taskDeadLineMinute"
                title="DeadLineHour"
                className="text-black xl:text-xl"
                value={dateMinute}
                onChange={handleChange(setDateMinute)}
              >
                <option>00</option>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
              </select>
              <select
                id="taskDeadLineFormat"
                title="DeadLineHour"
                className="text-black xl:text-xl"
                value={formatTime}
                onChange={handleChange(setFormatTime)}
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm">
          <label htmlFor="taskCategory" className="md:text-lg xl:text-2xl">
            Category:
          </label>
          <select
            id="taskCategory"
            className="text-black py-1 px-2 border box-border bg-slatwhite rounded-lg xl:text-xl"
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
            className="
            text-white bg-black border border-white px-2 py-1 rounded-lg transition-colors hover:bg-white hover:text-black duration-300 
            md:text-lg md:px-3 md:py-2
            "
          >
            Create Task
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="text-white bg-black border border-white px-2 py-1 rounded-lg transition-colors hover:bg-white hover:text-black duration-300 
            md:text-lg md:px-3 md:py-2"
          >
            Delete All
          </button>
        </div>
      </form>
    </div>
  );
}
