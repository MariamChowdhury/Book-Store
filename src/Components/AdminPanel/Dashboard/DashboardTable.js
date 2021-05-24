import React from "react";

const DashboardTable = ({ order }) => {
  return (
    <div>
      <table className="table table-striped table-borderless my-5 text-center">
        <thead>
          <tr>
            <th className="text-secondary" scope="col">
              Product Name
            </th>
            <th className="text-secondary" scope="col">
              Ordered by
            </th>
            <th className="text-secondary" scope="col">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {order.map((order, index) => (
            <tr>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
