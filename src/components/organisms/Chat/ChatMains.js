import React from "react";
import { CiSearch } from "react-icons/ci";
export default function ChatMains() {
  return (
    <div className="flex flex-row">
      <div className="basis-[30%]"></div>
      <div className="basis-[70%] bg-white container justify-end mt-20 rounded-lg">
        <div className="">
          <div className=" bg-white rounded-lg p-1 px-2 w-full">
            <form className="flex flex-row">
              <div className="text-start pr-4 ">
                <input
                  type="search"
                  placeholder="Search"
                  className="mx-[25rem] px-4 py-2  ml-7  bg-white border-[#828282] text-sm  w-full  rounded-lg font-family-quicksand"
                />
              </div>
              <button>
                <CiSearch className=" text-xl ml-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
