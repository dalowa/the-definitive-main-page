import { useState } from "react";

import { useSelectStore } from "@/store/selectStore";

export default function TheSelect({ options }: { options: string[] }) {
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
        className="flex w-1/3 cursor-pointer flex-col font-bebas"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleHover}
      >
        <h3
          className="w-full bg-black text-center py-3 px-3 text-2xl text-white border-t border-b border-l border-r-0 border-slate-200 box-border
                     md:text-4xl md:py-2 "
        >
          {options[index]}
        </h3>

        {isOptionsOpen ? (
          <ul className="w-full text-center bg-slate-100  py-1 px-1 gap-1 flex flex-col z-10">
            {options.map((e, i) => (
              <li
                className="cursor-pointer text-slate-100 py-1 px-2 border border-gray-900 bg-black hover:bg-slate-100 hover:text-black"
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
