import { Select } from "@/interfaces/components";
import { useSelectStore } from "@/store/selectStore";

import { useState } from "react";

export default function TheSelect({ options }: Select) {
  const index = useSelectStore((state) => state.index);
  const changeIndex = useSelectStore((state) => state.changeIndex);

  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  const handleHover = () => {
    if (isOptionsOpen) {
      setIsOptionsOpen(false);
      return;
    }
    setIsOptionsOpen(true);
  };

  return (
    <>
      <label
        className="flex w-1/3 cursor-pointer flex-col   "
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleHover}
      >
        <h3 className="w-full bg-green-500 text-center py-2 px-3 text-white md:text-4xl md:py-2">
          {options[index]}
        </h3>

        {isOptionsOpen ? (
          <ul className="w-full text-center  bg-green-800 py-2 px-1 gap-3 flex flex-col">
            {options.map((e, i) => (
              <li
                className="cursor-pointer text-slate-900 py-1 px-2 border border-gray-900 bg-green-400 hover:bg-green-200"
                key={i}
                onClick={() => changeIndex(i)}
              >
                {e}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </label>
    </>
  );
}
