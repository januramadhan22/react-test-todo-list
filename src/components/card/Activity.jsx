import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function Activity({ onModal, title, date }) {
  return (
    <div className="relative w-full p-6 h-56 rounded-lg bg-white shadow-md flex flex-col justify-between items-start cursor-pointer hover:scale-105 transition ease-in">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="w-full flex justify-between items-center text-gray-500">
        <p>{date}</p>
        <button
          onClick={onModal}
          className="relative z-30 text-xl active:scale-75"
        >
          <HiOutlineTrash />
        </button>
      </div>

      <a
        href="/activity-groups/1"
        className="absolute z-20 top-0 left-0 w-full h-full"
      />
    </div>
  );
}

export default Activity;
