import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

function DeleteItem({ offModal }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-7">
      <FiAlertTriangle className="w-16 h-16 text-red-500" />
      <h3 className="text-lg text-center font-medium">
        Apakah anda ingin menghapus activity <br />
        <strong>"Title Item"</strong>
      </h3>
      <div className="w-full flex justify-center gap-5">
        <button
          data-cy="modal-delete-cancel-button"
          onClick={offModal}
          className="w-28  py-2 bg-gray-100 text-gray-600 font-bold rounded-full hover:brightness-95 cursor-pointer"
        >
          Batal
        </button>
        <button
          data-cy="modal-delete-confirm-button"
          type="submit"
          className="w-28 py-2 bg-red-500 text-white font-bold rounded-full hover:brightness-95 cursor-pointer"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default DeleteItem;
