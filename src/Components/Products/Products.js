import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://agile-mountain-66366.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {product.map((pd) => (
            <Product pd={pd}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
