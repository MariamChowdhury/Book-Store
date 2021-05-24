import React, { useContext, useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import { UserContext } from "../../App";
import OrderData from "./OrderData";

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleOrder = () => {
    fetch("https://agile-mountain-66366.herokuapp.com/ordersByEmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h3 className="my-5">Welcome {loggedInUser.name} !</h3>
              <button className="btn purple-bg my-5 " onClick={handleOrder}>
                Click to see your order history
              </button>
            </div>
            <OrderData orders={orders}></OrderData>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
