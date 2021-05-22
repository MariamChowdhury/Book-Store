import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg purple-bg">
  <div class="container">
    <Link class="navbar-brand ms-5" to="/home">Book Shop</Link>
    <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link ms-5 " aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to="/myOrders">My Orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to="/allOrders">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to="/login">Login</Link>
        </li>
       </ul>
        
    </div>
  </div>
 
</nav>
  );
};

export default Navigation;