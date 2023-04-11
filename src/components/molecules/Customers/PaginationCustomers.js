import React from "react";
import { BsArrowRight } from "react-icons/bs";
export default function PaginationCustomers() {
  return (
    <div className="mx-3 lg:mx-0 md:mx-0">
      <div className="flex flex-row bg-[#FAFAFA] p-2 px-2 mt-4 rounded-md">
        <h1 className="hidden lg:block md:block lg:pr-[23rem] md:pr-[10rem] pr-[4rem]">
          Showing 10 Data Customers
        </h1>
        <BsArrowRight className="lg:hidden  md:hidden mt-1 text-[#6D6D6D] rotate-180" />
        <h1 className="lg:hidden  md:hidden  px-2 text-[#6D6D6D]">Back </h1>
        <h1 className=" px-3 bg-white shadow-md rounded-md">1</h1>
        <h1 className=" px-3 text-[#6D6D6D]">2</h1>
        <h1 className=" px-3 text-[#6D6D6D]">3</h1>
        <h1 className=" px-3 text-[#6D6D6D]">...</h1>
        <h1 className=" px-3 text-[#6D6D6D]">38</h1>
        <h1 className=" px-2 text-[#6D6D6D]">Next </h1>
        <BsArrowRight className="mt-1 text-[#6D6D6D]" />
      </div>
    </div>
  );
}
