"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import TheSelect from "./TheSelect";
import { useSelectStore } from "@/store/selectStore";
import { options } from "@/data/dataSearch";

export default function UltimateSearchBar() {
  const index = useSelectStore((state) => state.index);

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    /* window.alert(`La tecla es: ${event.code}`); */
    if (event.code === "Enter" || event.code === "Go") {
      event.preventDefault(); // Prevenir comportamiento por defecto (enviar formulario)
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
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Prevenir comportamiento por defecto (enviar formulario)
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
    <div className="flex h-44 w-full max-w-sm sm:max-w-2xl md:max-w-4xl">
      <TheSelect options={Object.keys(options)} />
      <form className="w-2/3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          /* onKeyDown={handleKeyDown} */
          placeholder="Search..."
          className="py-0 px-2 h-10 focus:outline-none border-2 border-sky-700 md:text-2xl md:h-14"
        />
        <button
          type="submit"
          className=" py-0 px-2 h-14 text-2xl border-2 border-sky-700 bg-sky-700"
        >
          🔎
        </button>
      </form>
    </div>
  );
}
