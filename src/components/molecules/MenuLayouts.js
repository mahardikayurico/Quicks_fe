import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi";
import { GoSettings } from "react-icons/go";
import { RxClipboard } from "react-icons/rx";
import { FiBattery } from "react-icons/fi";
import { BiDish } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";

export default function MenuLayouts() {
  return (
    <div className="pb-2">
      <div className="mt-8">
        <h1 className="text-[#98949E] text-[0.8rem]">Menu </h1>
      </div>
      <div className="mt-2">
        <div className="flex flex-row mt-2">
          <IoGridOutline className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E]  ml-2 "> Dashboard</h1>
        </div>
        <div className="flex flex-row mt-2">
          <FiBattery className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2">Stock</h1>
        </div>
        <div className="flex flex-row mt-2">
          <IoPeople className="text-[#5D5FEF] mt-1" />
          <h1 className="text-[#5D5FEF] font-semibold ml-2">Customer</h1>
        </div>
        <div className="flex flex-row mt-2">
          <BiDish className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2">Restaurant</h1>
        </div>
        <div className="flex flex-row mt-2">
          <BsPencilSquare className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2">Design</h1>
        </div>
        <div className="flex flex-row mt-2">
          <RxClipboard className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2">Report</h1>
        </div>
        <div className="flex flex-row mt-2">
          <BsPersonSquare className="mt-1 rounded-sm text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2">Role & Admin</h1>
        </div>
        <div className="flex flex-row mt-2">
          <GoSettings className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2">Settings</h1>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-[#98949E] text-[0.8rem]">Integration</h1>
      </div>
      <div className="mt-2">
        <div className="flex flex-row mt-2">
          <BsCart3 className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2">Stock</h1>
        </div>
        <div className="flex flex-row mt-2">
          <HiOutlineTruck className="mt-1 text-[#98949E]" />
          <h1 className="text-[#98949E] ml-2">Supply</h1>
        </div>
      </div>
    </div>
  );
}
