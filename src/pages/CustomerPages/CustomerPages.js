import React from "react";
import CustomersMains from "../../components/organisms/customers/CustomersMains";
import LayoutMains from "../../components/organisms/LayoutMains";
import LayoutResponsive from "../../components/organisms/LayoutResponsive";
export default function CustomerPages() {
  return (
    <div className="container flex lg:flex-row md:flex-row flex-col lg:p-5 lg:mx-auto md:p-3 md:mx-auto w-full">
      <LayoutMains />
      <LayoutResponsive />
      <section className="lg:basis-[85%]  lg:ml-3 md:ml-3 ">
        <CustomersMains />
      </section>
    </div>
  );
}
