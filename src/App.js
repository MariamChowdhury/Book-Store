import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/AdminPanel/Dashboard/Dashboard";
import AddProduct from "./Components/AdminPanel/AddProduct/AddProduct";
import DeleteProduct from "./Components/AdminPanel/DeleteProduct/DeleteProduct";
import Login from "./Components/Login/Login";
import Cart from "./Components/OrderPage/Cart";
import PrivateRoute from './Components/Login/PrivateRoute'
import OrderData from "./Components/OrderPage/OrderData";
import ProcessPayment from "./Components/Payment/ProcessPayment";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/allOrders">
            <Dashboard />
          </PrivateRoute>
          <Route path="/order">
          <OrderData/>
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/removeItem">
            <DeleteProduct />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/cart'>
            <Cart/>
          </PrivateRoute>
          <PrivateRoute path ='/payment'>
<ProcessPayment />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
