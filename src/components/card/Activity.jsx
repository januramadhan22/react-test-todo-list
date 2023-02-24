import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function Activity({ onModal }) {
  return (
    <div className="relative w-full p-6 h-56 rounded-lg bg-white shadow-md flex flex-col justify-between items-start cursor-pointer hover:scale-105 transition ease-in">
      <h3 className="text-lg font-semibold">Title</h3>
      <div className="w-full flex justify-between items-center text-gray-500">
        <p>date</p>
        <button
          onClick={onModal}
          className="relative z-30 text-xl active:scale-75"
        >
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
}

export default Activity;
