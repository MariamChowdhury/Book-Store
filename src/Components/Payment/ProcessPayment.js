import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const ProcessPayment = () => {
  return (
    <div>
    
    <Elements stripe={stripePromise}>
      <div className="container">
        <div className="row m-5 p-5">
          <div className="col">
            <h3 className='purple-color my-4'>Please complete payment</h3>
          <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
    </div>
  );
};

export default ProcessPayment;