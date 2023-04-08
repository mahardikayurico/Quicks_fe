import React from "react";
import CustomersMains from "../../components/organisms/customers/CustomersMains";
import LayoutMains from "../../components/organisms/LayoutMains";
export default function CustomerPages() {
  return (
    <div className="container flex flex-row p-5 mx-auto">
      <LayoutMains />
      <section className="basis-[85%]  ml-3 ">
        <CustomersMains />
      </section>
    </div>
  );
}
