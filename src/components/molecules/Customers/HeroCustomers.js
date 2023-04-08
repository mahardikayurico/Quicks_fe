import React from "react";
import Unsplash from "../../../assets/images/unsplash.png";

export default function HeroCustomers() {
  return (
    <div className="bg-[#5D5FEF] mt-2  rounded-lg mr-2">
      <div className="flex flex-row">
        <div className="pl-4 pt-4">
          <h1 className="text-white text-lg">Customer</h1>
          <h2 className="text-[#EBFFFE] text-[0.67rem] mt-3">
            On this menu you will be able to create, edit, and also delete the
            customer. Also you can manage it easily.
          </h2>
        </div>
        <img src={Unsplash} className="rounded-r-lg" />
      </div>
    </div>
  );
}
