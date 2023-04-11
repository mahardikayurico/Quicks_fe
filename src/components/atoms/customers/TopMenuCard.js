import React from "react";
import statistik from "../../../assets/images/statistik.png";
export default function TopMenuCard() {
  return (
    <div className="ml-16 lg:ml-0 md:ml-52 mt-4 lg:mt-0 md:mt-0 mr-16 lg:mr-0 md:mr-48">
      <div className="bg-[#FAFAFA] p-3 mt-4 rounded-lg  ">
        <div>
          <div className="mt-2">
            <h1 className="text-2xl font-semibold font-family-quicksand">
              Top Menu <br />{" "}
              <span className="text-[#F17300] ">This Week </span>
            </h1>
            <h1 className="text-[#98949E] font-family-satoshi">
              10 - 12 Agustus 2023
            </h1>
          </div>
          <div className="bg-[#FFFFFF] shadow-md p-3 py-2 mt-2  relative rounded-lg">
            <h1 className="font-semibold text-sm font-family-quicksand mr-4 lg:mr-0 ">
              Nasi Goreng Jamur Special Resto Pak Min
            </h1>
            <button className="bg-[#F17300] shadow-md shadow-black absolute -top-1 right-0   text-white font-semibold rotate-12 px-3 py-1">
              1
            </button>
          </div>
        </div>
        <div>
          <ol className="text-[#98949E] font-family-quicksand text-sm">
            <li className="mt-4">2. Tongseng Sapi Gurih</li>
            <li className="mt-3">3. Nasi Gudeg Telur Ceker</li>
            <li className="mt-3">4. Nasi Ayam serundeng</li>
            <li className="mt-3">5. Nasi Goreng Seafood</li>
          </ol>
        </div>
        <div>
          <img src={statistik} />
        </div>
      </div>
    </div>
  );
}
