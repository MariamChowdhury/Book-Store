import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderModal from "../OrderPage/OrderModal";

const Product = ({ pd }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-3  my-5">
      <div class="card h-100 border-0 shadow-sm">
        <img src={pd.imageURL} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">{pd.name}</h5>
          <p>
            <small>Price:{pd.price}</small>
          </p>
          <button class="btn purple-bg " onClick={openModal}>
            Add to cart!
          </button>
          <OrderModal
            modalIsOpen={modalIsOpen}
            name={pd.name}
            price={pd.price}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
