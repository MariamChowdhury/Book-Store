import React from "react";
import { Link } from "react-router-dom";

const OrderList = ({ orders }) => {
  return (
    <div>
      <table className="table table-striped table-borderless my-5 text-center">
        <thead>
          <tr>
            <th className="text-secondary" scope="col">
              Name
            </th>
            <th className="text-secondary" scope="col">
              Phone
            </th>
            <th className="text-secondary" scope="col">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <td>{order.name}</td>
              <td>{order.number}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/payment">
          <button className="btn purple-bg">CheckOut</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default OrderList;
