import React from "react";
import DashboardTable from "./DashboardTable";

const DashboardPage = ({ order }) => {
  console.log(order);
  return (
    <div className="container">
      <h4 className="text-center purple-color mt-5">
        Total Orders: {order.length}
      </h4>
      <DashboardTable order={order}></DashboardTable>
    </div>
  );
};

export default DashboardPage;
