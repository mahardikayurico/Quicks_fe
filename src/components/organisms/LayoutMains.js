import React from "react";
import logo from "../../assets/images/square.png";
import MenuLayouts from "../molecules/MenuLayouts";

export default function LayoutMains() {
  return (
    <>
      <section className="basis-[15%] border-r-2 border-[#D1D0D366]">
        <div className="mx-auto">
          <img src={logo} />
        </div>
        <MenuLayouts />
      </section>
    </>
  );
}
