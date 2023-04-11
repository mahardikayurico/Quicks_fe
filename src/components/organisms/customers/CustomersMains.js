import React from "react";
import HeadersCustomers from "../../molecules/customers/HeadersCustomers";
import HeroCustomers from "../../molecules/customers/HeroCustomers";
import AnalyticsCustomers from "../../molecules/customers/AnalyticsCustomers";
import TableCustomers from "../../molecules/customers/TableCustomers";
import PaginationCustomers from "../../molecules/customers/PaginationCustomers";

export default function CustomersMains() {
  return (
    <div>
      <HeadersCustomers />
      <div className="flex lg:flex-row flex-col">
        <div className="lg:basis-[80%]">
          <HeroCustomers />
          <TableCustomers />
          <PaginationCustomers />
        </div>
        <div className="lg:basis-[20%]">
          <AnalyticsCustomers />
        </div>
      </div>
    </div>
  );
}
