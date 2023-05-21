import { Category } from "@/classes/Task";

function H3CategoryWithColor({ cat }: { cat: Category }) {
  if (cat == "WORK") {
    return (
      <h3 className="bg-amber-600 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "STUDY") {
    return (
      <h3 className="bg-yellow-300 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "HOME") {
    return (
      <h3 className="bg-pink-400 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "HEALTH AND WELLNESS") {
    return (
      <h3 className="bg-red-700 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "FINANCES") {
    return (
      <h3 className="bg-cyan-400 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "SOCIAL") {
    return (
      <h3 className="bg-orange-600 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "LEISURE") {
    return (
      <h3 className="bg-green-500 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "PERSONAL PROJECTS") {
    return (
      <h3 className="bg-lime-400 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "ORGANIZATION") {
    return (
      <h3 className="bg-blue-700 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  if (cat == "TECHNOLOGY") {
    return (
      <h3 className="bg-violet-700 text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
        {cat}
      </h3>
    );
  }
  return (
    <h3 className="bg-white text-black py-0 px-2 rounded-lg font-bebas tracking-widest text-xl my-1">
      {cat}
    </h3>
  );
}

export default H3CategoryWithColor;
/* export const selectColorBorder = (cat: Category, tailclass: string) => {
  if (cat == "WORK") {
    return `border-amber-600 ${tailclass}`;
  }
  if (cat == "STUDY") {
    return `border-yellow-300 ${tailclass}`;
  }
  if (cat == "HOME") {
    return `border-pink-400 ${tailclass}`;
  }
  if (cat == "HEALTH AND WELLNESS") {
    return `border-red-700 ${tailclass}`;
  }
  if (cat == "FINANCES") {
    return `border-cyan-400 ${tailclass}`;
  }
  if (cat == "SOCIAL") {
    return `border-orange-600 ${tailclass}`;
  }
  if (cat == "LEISURE") {
    return `border-green-500 ${tailclass}`;
  }
  if (cat == "PERSONAL PROJECTS") {
    return `border-lime-400 ${tailclass}`;
  }
  if (cat == "ORGANIZATION") {
    return `border-blue-700 ${tailclass}`;
  }
  if (cat == "TECHNOLOGY") {
    return `border-violet-700 ${tailclass}`;
  }
}; */
