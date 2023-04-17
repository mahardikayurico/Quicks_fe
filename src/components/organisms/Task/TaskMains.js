import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import CardTask from "../../molecules/Task/CardTask";

export default function TaskMains() {
  return (
    <div className="flex flex-row">
      <div className="basis-[30%]"></div>
      <div className="basis-[70%] bg-white container justify-end mt-20 rounded-lg">
        <div className="flex flex-row justify-between m-2">
          <div className="p-2 border border-black rounded-lg ml-16 flex flex-row">
            <h1>My Tasks</h1>
            <IoIosArrowDown className="mt-1 text-lg text-black font-bold  hover:cursor-pointer" />
          </div>
          <div>
            <button className="p-2 bg-[#2F80ED]  text-[#FFFFFF] rounded-lg ">
              New Tasks
            </button>
          </div>
        </div>
        <CardTask />
      </div>
    </div>
  );
}
