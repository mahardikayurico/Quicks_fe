import React from "react";
import LayoutMains from "../../components/organisms/Layout/LayoutMains";
import Navbar from "../../components/organisms/Layout/Navbar";
import TaskMains from "../../components/organisms/Task/TaskMains";

export default function TaskPages() {
  return (
    <div className="bg-[#262626]">
      <div className="container flex flex-row  justify-end h-screen w-full">
        <section className="basis-[80%] relative   border-l border-white max-h-full ">
          <LayoutMains />
          <TaskMains />
          <Navbar />
        </section>
      </div>
    </div>
  );
}
