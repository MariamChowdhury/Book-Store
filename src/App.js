import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Dashboard from './Components/AdminPanel/Dashboard/Dashboard';
import ProcessPayment from './Components/Payment/ProcessPayment';
import AddProduct from './Components/AdminPanel/AddProduct/AddProduct';
import DeleteProduct from './Components/AdminPanel/DeleteProduct/DeleteProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/allOrders'>
        <Dashboard />
        </Route>
        <Route path='/order'>
          <ProcessPayment />
        </Route>
        <Route path='/addProduct'>
        <AddProduct />
        </Route>
        <Route path='/removeItem'>
          <DeleteProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
