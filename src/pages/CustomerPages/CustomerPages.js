import React from "react";
import HeadersCustomers from "../../components/molecules/Customers/HeadersCustomers";
import LayoutMains from "../../components/organisms/LayoutMains";
export default function CustomerPages() {
  return (
    <div className="container flex flex-row p-5 mx-auto">
      <LayoutMains />
      <section className="basis-[85%]  ml-3 ">
        <HeadersCustomers />
      </section>
    </div>
  );
}
