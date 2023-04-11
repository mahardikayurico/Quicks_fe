import React from "react";
import { IoGridOutline, IoPeople } from "react-icons/io5";
import { BsPersonSquare, BsCart3, BsPencilSquare } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi";
import { GoSettings } from "react-icons/go";
import { RxClipboard } from "react-icons/rx";
import { FiBattery } from "react-icons/fi";
import { BiDish } from "react-icons/bi";

export default function MenuLayouts() {
  return (
    <div className="pb-2 md:mr-3">
      <div className="mt-8">
        <h1 className="text-[#98949E] text-[0.8rem] font-family-satoshi">
          Menu{" "}
        </h1>
      </div>
      <div className="mt-2">
        <div className="flex flex-row mt-2">
          <IoGridOutline className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E]  ml-2 font-family-quicksand">
            {" "}
            Dashboard
          </h1>
        </div>
        <div className="flex flex-row mt-2">
          <FiBattery className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2 font-family-quicksand">Stock</h1>
        </div>
        <div className="flex flex-row mt-2">
          <IoPeople className="text-[#5D5FEF] mt-1" />
          <h1 className="text-[#5D5FEF] font-semibold ml-2 font-family-quicksand">
            Customer
          </h1>
        </div>
        <div className="flex flex-row mt-2">
          <BiDish className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2 font-family-quicksand">
            Restaurant
          </h1>
        </div>
        <div className="flex flex-row mt-2">
          <BsPencilSquare className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2 font-family-quicksand">Design</h1>
        </div>
        <div className="flex flex-row mt-2">
          <RxClipboard className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2 font-family-quicksand">Report</h1>
        </div>
        <div className="flex flex-row mt-2">
          <BsPersonSquare className="mt-1 rounded-sm text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2 font-family-quicksand">
            Role & Admin
          </h1>
        </div>
        <div className="flex flex-row mt-2">
          <GoSettings className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2 font-family-quicksand">
            Settings
          </h1>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-[#98949E] text-[0.8rem] font-family-satoshi">
          Integration
        </h1>
      </div>
      <div className="mt-2">
        <div className="flex flex-row mt-2">
          <BsCart3 className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2 font-family-quicksand">Stock</h1>
        </div>
        <div className="flex flex-row mt-2">
          <HiOutlineTruck className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2 font-family-quicksand">Supply</h1>
        </div>
      </div>
    </div>
  );
}
