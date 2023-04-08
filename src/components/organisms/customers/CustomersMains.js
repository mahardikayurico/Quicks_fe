import React from "react";
import HeadersCustomers from "../../molecules/customers/HeadersCustomers";
import HeroCustomers from "../../molecules/customers/HeroCustomers";
import AnalyticsCustomers from "../../molecules/customers/AnalyticsCustomers";
import TableCustomers from "../../molecules/customers/TableCustomers";

export default function CustomersMains() {
  return (
    <div>
      <HeadersCustomers />
      <div className="flex flex-row">
        <div className="basis-[80%]">
          <HeroCustomers />
          <TableCustomers />
        </div>
        <div className="basis-[20%]">
          <AnalyticsCustomers />
        </div>
      </div>
    </div>
  );
}
