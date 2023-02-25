import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

function Item({ onModal }) {
  return (
    <div className="w-full p-5 rounded-lg shadow-md bg-white flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input type="checkbox" />
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <h3 className="text-lg font-bold">Title Item</h3>
        <HiOutlinePencil className="text-gray-500 cursor-pointer" />
      </div>

      <button onClick={onModal} className="text-gray-500 text-xl">
        <HiOutlineTrash />
      </button>
    </div>
  );
}

export default Item;
