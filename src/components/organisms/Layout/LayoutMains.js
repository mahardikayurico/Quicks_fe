import React from "react";
import { CiSearch } from "react-icons/ci";

export default function LayoutMains() {
  return (
    <div className="ml-5 mt-5">
      <div className=" bg-[#828282] rounded-lg p-1 px-2 w-full">
        <form className="flex flex-row">
          <button>
            <CiSearch className="mt-1 text-xl" />
          </button>
          <div className="text-start pr-4 ">
            <input
              type="search"
              className="p-1 pr-[45rem] ml-7  bg-[#828282] border-[#828282] text-sm  w-full  rounded-lg font-family-quicksand"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
