import { Category } from "@/classes/Task";
import { useTasksListStore } from "@/store/tasksListStore";

interface Task {
  category: Category;
  name: string;
  description: string;
  importantNumber: number;
  id: number;
}

export default function Task({
  category,
  name,
  description,
  importantNumber,
  id,
}: Task) {
  const deleteTask = useTasksListStore((state) => state.deleteTask);

  const handleClick = () => {
    deleteTask(id);
  };

  const selectColor = (cat: Category, tailclass: string) => {
    if (cat == "STUDY") {
      return `bg-yellow-300 ${tailclass}`;
    } else if (cat == "FAMILY") {
      return `bg-pink-400 ${tailclass}`;
    } else if (cat == "PERSONAL") {
      return `bg-lime-400 ${tailclass}`;
    } else if (cat == "HOME") {
      return `bg-green-800 ${tailclass}`;
    } else if (cat == "SOCIAL") {
      return `bg-orange-600 ${tailclass}`;
    } else if (cat == "HEALTH") {
      return `bg-red-700 ${tailclass}`;
    } else if (cat == "ANYTHING") {
      return `bg-cyan-400 ${tailclass}`;
    } else if (cat == "WORK") {
      return `bg-violet-700 ${tailclass}`;
    }
  };

  return (
    <div className="text-white bg-black border-2 py-2 px-3 rounded-lg flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-right">{name}</h2>
        <h3
          className={selectColor(
            category,
            "text-black py-1 px-2 rounded-lg font-bebas tracking-widest text-xl"
          )}
        >
          {category}
        </h3>
      </div>
      <p className="font-dm">{description}</p>
      <button
        className="text-black bg-white border border-white px-2 py-1 rounded-lg transition-colors hover:bg-black hover:text-white duration-300 my-2"
        onClick={handleClick}
      >
        Delete Task
      </button>
    </div>
  );
}
