import React from "react";

export default function HeadersCustomers() {
  return (
    <div>
      <div className="border-b-2 border-[#D1D0D366] p-3 lg:p-0 md:p-0">
        <div className="">
          <h1 className="text-3xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
            Customer
          </h1>
          <h3 className="text-[#98949E] font-family-satoshi">
            You can manage and organize your customer and other things here
          </h3>
        </div>
        <div className="flex flex-row lg:justify-end md:justify-end justify-between">
          <div className="lg:px-12 md:px-8 px-2 border-b-2 border-[#5D5FEF] pb-2 font-family-quicksand">
            Customer
          </div>
          <div className="lg:px-12 md:px-8 px-2 pb-2 font-family-quicksand">
            Promo
          </div>
          <div className="lg:px-12 md:px-8 px-2 pb-2 font-family-quicksand">
            Voucher
          </div>
        </div>
      </div>
    </div>
  );
}
