import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import activityEmpty from "../assets/activity-empty.svg";
import Activity from "../components/card/Activity";
import DeleteActivity from "../components/modal/DeleteActivity";
import { useDispatch, useSelector } from "react-redux";
import {
  createActivity,
  getActivities,
} from "../utils/redux/actions/activitesAction";
import { email } from "../utils/email";

function Home() {
  const dispatch = useDispatch();
  const { getActivitiesLoading, getActivitiesResult, createActivityResult } =
    useSelector((state) => state.ActivityReducer);

  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    if (createActivityResult) {
      dispatch(getActivities());
    }
    dispatch(getActivities());
  }, [createActivityResult, dispatch]);

  const handleCreate = (e) => {
    e.preventDefault();

    createActivity(dispatch, {
      title: "Aktivitas Baru",
      email: email,
    });
  };

  return (
    <div className="relative">
      <Navbar />

      <header className="py-14 px-40 flex items-center justify-between">
        <h1 className="text-5xl font-bold">Activity</h1>
        <button
          onClick={(e) => handleCreate(e)}
          className="pl-4 pr-6 py-2 rounded-full flex items-center gap-2 text-lg font-semibold text-white bg-blue-400 hover:scale-105 transition ease-in"
        >
          <AiOutlinePlus />
          Tambah
        </button>
      </header>

      <section className={`px-40 flex justify-center items-start`}>
        {getActivitiesLoading ? (
          <p>Loading...</p>
        ) : getActivitiesResult.length === 0 ? (
          <div className="scale-90">
            <img
              onClick={(e) => handleCreate(e)}
              src={activityEmpty}
              alt="Activity Empty"
              className="cursor-pointer"
            />
          </div>
        ) : (
          getActivitiesResult && (
            <div className="w-full grid grid-cols-4 gap-4">
              {getActivitiesResult.map((item) => (
                <Activity
                  key={item.id}
                  title={item.title}
                  date={item.created_at}
                  onModal={() => setDeleteModal(true)}
                />
              ))}
            </div>
          )
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
