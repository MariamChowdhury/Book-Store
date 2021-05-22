import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="p-5 my-5 sidebar-content">
        <div className="mt-5 ">
        <Link to="/allOrders">
            <p>
              <AddShoppingCartIcon /> All Orders
            </p>
          </Link>
         
        </div>
        <div className="mt-5">
        <Link to="/addProduct">
            {" "}
            <p>
             <AddBoxIcon /> Add Product
            </p>
          </Link>
        </div>
      <div className="mt-5">
            <Link to="/removeItem">
              <p>             
                <DeleteForeverIcon /> Remove Product
              </p>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default SideBar;