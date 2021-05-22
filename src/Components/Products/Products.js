import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [product,setProduct]=useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data=> setProduct(data))
  },[])

  return (
    <div>
     <div className="container my-5">
       <div className="row">
         {
           product.map(pd => <Product pd={pd}></Product>)
         }
       </div>
     </div>
    </div>
  );
};

export default Products;