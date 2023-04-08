import React from "react";
import Unsplash from "../../../assets/images/unsplash.png";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlinePrinter } from "react-icons/ai";

export default function HeroCustomers() {
  return (
    <>
      <div className="bg-[#5D5FEF] mt-2  rounded-lg mr-2">
        <div className="flex flex-row">
          <div className="pl-4 pt-4">
            <h1 className="text-white text-xl">Customer</h1>
            <h2 className="text-[#EBFFFE] text-[0.7rem] mt-3">
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </h2>
          </div>
          <img src={Unsplash} className="rounded-r-lg" />
        </div>
      </div>
      <div className="flex flex-row justify-between  mr-4 ml-2 -mt-[3rem]">
        <div className="flex flex-row p-2 bg-[#FFFFFF33] rounded-lg">
          <AiOutlinePlus className="mt-1 text-white font-semibold" />
          <button className=" text-white ml-2">Add New Customer</button>
        </div>
        <div className="flex flex-row bg-white rounded-lg p-1 px-2 ">
          <CiSearch className="mt-2" />
          <form>
            <div className="text-start pr-4">
              <input
                type="text"
                placeholder="Search Customer"
                className="p-1 mr-20 pl-4 mr-2 text-sm w-full border border-white rounded-lg"
              />
            </div>
          </form>
          <button className="bg-[#5D5FEF] text-white p-1 text-sm rounded-lg shadow-md">
            Search
          </button>
        </div>
        <div className="flex flex-row bg-[#FFFFFF33] rounded-lg p-2 px-4">
          <CiFilter className="mt-1 text-white font-bold" />
          <button className=" text-white ml-2">Filter</button>
        </div>
        <div className="flex flex-row bg-[#FFFFFF33] rounded-lg p-2 px-4 ">
          <FiRefreshCw className="mt-1 text-white font-bold" />
          <button className=" text-white ml-2">Refresh</button>
        </div>
        <div className="bg-[#FFFFFF33] rounded-lg p-2 px-4 text-white">
          <AiOutlinePrinter className="mt-1 text-lg" />
        </div>
      </div>
    </>
  );
}
