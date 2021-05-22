import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({pd}) => { 
  return (
      <div className="col-md-3  my-5">
      <div class="card h-100 border-0 shadow-sm">
  <img src={pd.imageURL}class="card-img-top" alt="..." />
  <div class="card-body text-center">
    <h5 class="card-title">{pd.name}</h5>
    <p><small>Price:{pd.price}</small></p>
    <Link to='/' class="btn purple-bg ">Buy Now!</Link>
  </div>
</div>
    </div>
  );
};

export default Product;