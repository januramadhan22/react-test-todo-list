import React, { useState } from "react";

import Navbar from "../components/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import activityEmpty from "../assets/activity-empty.svg";
import Activity from "../components/card/Activity";
import DeleteActivity from "../components/modal/DeleteActivity";

function Home() {
  const [deleteModal, setDeleteModal] = useState(false);
  const datas = [
    { id: 1, title: "halo" },
    { id: 2, title: "halo" },
  ];

  return (
    <div className="relative">
      <Navbar />

      <header className="py-14 px-40 flex items-center justify-between">
        <h1 className="text-5xl font-bold">Activity</h1>
        <button className="pl-4 pr-6 py-2 rounded-full flex items-center gap-2 text-lg font-semibold text-white bg-blue-400 hover:scale-105 transition ease-in">
          <AiOutlinePlus />
          Tambah
        </button>
      </header>

      <section className={`px-40 flex justify-center items-start`}>
        {datas ? (
          <div className="w-full grid grid-cols-4 gap-4">
            {datas.map((item) => (
              <Activity key={item} onModal={() => setDeleteModal(true)} />
            ))}
          </div>
        ) : (
          <div className="scale-90">
            <img
              src={activityEmpty}
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
            <DeleteActivity onModal={() => setDeleteModal(true)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
