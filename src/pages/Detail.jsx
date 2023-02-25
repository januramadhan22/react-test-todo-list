import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { HiArrowsUpDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Item from "../components/card/Item";
import itemEmpty from "../assets/todo-empty.svg";
import DeleteItem from "../components/modal/DeleteItem";

function Detail() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [onSort, setOnSort] = useState(false);
  const datas = [
    { id: 1, title: "halo" },
    { id: 2, title: "halo" },
  ];

  const sortItem = ["Terbaru", "Terlama", "A-Z", "Z-A", "Belum Selesai"];

  return (
    <div>
      <Navbar />
      <header className="py-14 px-40 flex items-center justify-between gap-10">
        <div className="w-full flex items-center gap-2">
          <Link to="/">
            <MdOutlineKeyboardArrowLeft className="text-5xl" />
          </Link>
          <form className="w-full flex gap-2 items-center transition ease-in">
            <input
              type="text"
              placeholder="Title Activity"
              className={`text-5xl font-bold text-black placeholder:text-black w-72 focus:outline-none focus:w-full focus:underline focus:decoration-2 focus:underline-offset-4 transition ease-in capitalize`}
            />
            <HiOutlinePencil className="ml-5 text-2xl text-gray-300" />
          </form>
        </div>
        <div className="flex items-center gap-4">
          {datas && (
            <div className="relative">
              <button
                onClick={() => setOnSort(!onSort)}
                className="relative z-30 w-12 h-12 border rounded-full flex items-center justify-center text-xl text-gray-300 border-gray-300 hover:brightness-75"
              >
                <HiArrowsUpDown />
              </button>

              {onSort && (
                <div className="absolute z-20 right-0 top-14 rounded-md w-48 bg-white drop-shadow-lg flex flex-col divide-y">
                  {sortItem.map((item, index) => (
                    <button key={index} className="px-4 py-2 hover:bg-gray-50">
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <button className="pl-4 pr-6 py-2 rounded-full flex items-center gap-2 text-lg font-semibold text-white bg-blue-400 hover:scale-105 transition ease-in">
            <AiOutlinePlus />
            Tambah
          </button>
        </div>
      </header>

      <section className={`px-40 flex justify-center items-start`}>
        {datas ? (
          <div className="w-full flex flex-col gap-4">
            {datas.map((item) => (
              <Item key={item} onModal={() => setDeleteModal(true)} />
            ))}
          </div>
        ) : (
          <div className="scale-90">
            <img
              src={itemEmpty}
              alt="Activity Empty"
              className="cursor-pointer"
            />
          </div>
        )}
      </section>

      {deleteModal && (
        <div className="w-screen h-screen fixed top-0 left-0 z-50">
          <div onClick={() => setDeleteModal(false)} className="overlay"></div>
          <div className="modal-content h-[288px] w-[360px] md:w-[400px]">
            <DeleteItem offModal={() => setDeleteModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
