import React from "react";
import OrderList from "./OrderList";

const OrderData = ({ orders }) => {
  console.log(orders);
  return (
    <div>
      <h5 className="text-center purple-color">
        Total orders: {orders.length}
      </h5>
      {orders.length ? (
        <OrderList orders={orders}></OrderList>
      ) : (
        <div className="p-5">
          <h4 className="purple-color text-center">
            You don't have any orders!
          </h4>
        </div>
      )}
    </div>
  );
};

export default OrderData;
