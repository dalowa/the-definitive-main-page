"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import TheSelect from "./TheSelect";
import { useSelectStore } from "@/store/selectStore";
import { options } from "@/data/dataSearch";

export default function UltimateSearchBar() {
  const index = useSelectStore((state) => state.index);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    let transformed;
    if (Object.keys(options)[index] == "ECOSIA") {
      transformed = inputValue
        .toLowerCase()
        .replace(/ /g, "%20")
        .replace(/[^a-zA-Z0-9%]/g, "");
    }
    if (Object.keys(options)[index] !== "ECOSIA") {
      transformed = inputValue
        .toLowerCase()
        .replace(/ /g, "+")
        .replace(/[^a-zA-Z0-9+]/g, "");
    }

    window.open(
      `${options[Object.keys(options)[index]]}${transformed}`,
      "_blank"
    );
    setInputValue("");
    return;
  };

  return (
    <div className="flex h-12 w-full sm:max-w-2xl md:max-w-6xl ">
      <TheSelect options={Object.keys(options)} />
      <form
        className="w-2/3 bg-black  sm:h-14 border-t border-r border-b border-slate-200 py-7 flex justify-center items-center text-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search..."
          className="py-1 px-3 font-dm focus:outline-none w-3/4 box-borde bg-zinc-800 text-gray-200 rounded-2xl border-2 text-sm
          md:text-base"
        />
        <button
          type="submit"
          className="py-0 px-2 h-10  bg-black  w-1/4 sm:text-2xl sm:h-14 lg:text-2xl lg:h-14 lg:py-0 box-border"
        >
          🔎
        </button>
      </form>
    </div>
  );
}
