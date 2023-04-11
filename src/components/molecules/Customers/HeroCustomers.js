import React from "react";
import Unsplash from "../../../assets/images/unsplash.png";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlinePrinter } from "react-icons/ai";

export default function HeroCustomers() {
  return (
    <div className="flex flex-row lg:flex-col bg-[#5D5FEF] lg:bg-white    mx-3 lg:mx-0 md:mx-0">
      <div className="lg:bg-[#5D5FEF] md:bg-[#5D5FEF] mt-2  lg:rounded-lg md:rounded-lg lg:mr-2">
        <div className="flex flex-row">
          <div className="pl-4 pt-4">
            <h1 className="text-white text-xl font-family-quicksand">
              Customer
            </h1>
            <h2 className="text-[#EBFFFE] text-[0.7rem] mt-3  md:pr-12 font-family-satoshi">
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </h2>
            <div className="lg:hidden ">
              <div className="flex flex-row bg-white rounded-lg p-1 px-2 mr-6 md:mr-52 mt-1 md:mt-4">
                <CiSearch className="mt-2" />
                <form>
                  <div className="text-start pr-4 ">
                    <input
                      type="text"
                      placeholder="Search Customer"
                      className="p-1 lg:mr-20 pl-4 md:pl-12 mr-2 md:mr-6 lg:text-sm md:text-sm text-[0.7rem] w-full border border-white rounded-lg font-family-quicksand"
                    />
                  </div>
                </form>
                <button className="bg-[#5D5FEF] text-white p-1 lg:text-sm md:text-sm text-[0.7rem] rounded-lg shadow-md font-family-quicksand">
                  Search
                </button>
              </div>
            </div>
          </div>
          <img src={Unsplash} className="rounded-r-lg hidden lg:block " />
        </div>
      </div>
      <div className="flex lg:flex-row  flex-col justify-between mr-2 lg:mr-4 mb-2 lg:mb-0 md:mb-0  lg:ml-2 lg:-mt-[3rem] ">
        <div className="flex flex-row lg:p-2 md:p-2 p-2 px-4 lg:px-0  mt-1 lg:mt-0  bg-[#FFFFFF33] rounded-lg">
          <AiOutlinePlus className="mt-1 text-white  font-bold" />
          <button className="hidden lg:block  text-white lg:ml-2 md:ml-2 ml-1 lg:text-sm md:text-sm text-[0.7rem] font-family-quicksand">
            Add New Customer
          </button>
        </div>
        <div className="hidden lg:block ">
          <div className="flex flex-row bg-white rounded-lg p-1 px-2 ">
            <CiSearch className="mt-2" />
            <form>
              <div className="text-start pr-4">
                <input
                  type="text"
                  placeholder="Search Customer"
                  className="p-1 lg:mr-20 pl-4 mr-2 lg:text-sm md:text-sm text-[0.7rem] w-full border border-white rounded-lg font-family-quicksand"
                />
              </div>
            </form>
            <button className="bg-[#5D5FEF] text-white p-1 lg:text-sm md:text-sm text-[0.7rem] rounded-lg shadow-md font-family-quicksand">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-row bg-[#FFFFFF33] rounded-lg mt-1 md:mt-2 lg:mt-0 p-2 px-4">
          <CiFilter className="mt-1 text-white font-bold" />
          <button className="hidden lg:block  text-white ml-2 lg:text-sm md:text-sm text-[0.7rem] font-family-quicksand">
            Filter
          </button>
        </div>
        <div className="flex flex-row bg-[#FFFFFF33] rounded-lg p-2 px-4 mt-1 md:mt-2 lg:mt-0 ">
          <FiRefreshCw className="mt-1 text-white font-bold" />
          <button className="hidden lg:block  text-white ml-2 lg:text-sm md:text-sm text-[0.7rem] font-family-quicksand">
            Refresh
          </button>
        </div>
        <div className="bg-[#FFFFFF33] rounded-lg p-2 px-4 text-white mt-1 md:mt-2 lg:mt-0 justify-center ">
          <AiOutlinePrinter className="mt-1 text-lg" />
        </div>
      </div>
    </div>
  );
}
