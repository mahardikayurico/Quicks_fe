import React from "react";
import logo from "../../assets/images/square.png";
import MenuLayouts from "../molecules/MenuLayouts";
import profile from "../../assets/images/profile.png";
import { RiLogoutBoxFill } from "react-icons/ri";

export default function LayoutMains() {
  return (
    <>
      <section className="basis-[15%] border-r-2 border-[#D1D0D366]">
        <div className="mx-auto">
          <img src={logo} />
        </div>
        <MenuLayouts />
        <div className="mt-[18rem]">
          <div className="flex flex-row  border-t-2 border-[#D1D0D366]">
            <div className="mt-2">
              <img src={profile} />
            </div>
            <div className="mt-2 ml-2">
              <h1 className="text-sm font-semibold">Savannah N</h1>
              <h1 className="text-[0.65rem] text-[#98949E]">
                Food Quality Manager
              </h1>
            </div>
          </div>
          <div className="mt-2 flex flex-row text-center  m-2 rounded-sm bg-[#FEF5F6] p-2 rounded-sm  text-[#8F0A13]">
            <RiLogoutBoxFill className="mt-1 text-center" />
            <h1 className="ml-2 text-center">Logout</h1>
          </div>
        </div>
      </section>
    </>
  );
}
