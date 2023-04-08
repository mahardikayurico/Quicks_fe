import React from "react";

export default function HeadersCustomers() {
  return (
    <div>
      <div className="border-b-2 border-[#D1D0D366]">
        <div className="mt-2">
          <h1 className="text-3xl font-[700]">Customer</h1>
          <h3 className="text-[#98949E]">
            You can manage and organize your customer and other things here
          </h3>
        </div>
        <div className="flex flex-row justify-end">
          <div className="px-12 border-b-2 border-[#5D5FEF] pb-2">Customer</div>
          <div className="px-12 pb-2">Promo</div>
          <div className="px-12 pb-2">Voucher</div>
        </div>
      </div>
    </div>
  );
}
