import React, { useEffect, useState } from "react";
import DashboardPage from "./DashboardPage";

const DashboardData = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("https://agile-mountain-66366.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div>
      <DashboardPage order={order}></DashboardPage>
    </div>
  );
};

export default DashboardData;
