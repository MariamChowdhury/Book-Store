import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod);
      setPaymentError(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          type="submit"
          className="btn purple-color my-3 btn-outline-info"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {paymentError && <h5 style={{ color: "red" }}>{paymentError} </h5>}
      {paymentSuccess && (
        <div>
          <h5 style={{ color: "green" }}>Payment successful!</h5>
          <Link to="/home">
            <button className="btn purple-bg">Go Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
