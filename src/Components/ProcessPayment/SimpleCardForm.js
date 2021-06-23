import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null)
      handlePayment(paymentMethod.id)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {
          paymentError && <p style={{color:'red'}}>{paymentError}</p>
      }
      {
          paymentSuccess && <p style={{color:'green'}}>Your payment is successfully done and now you can go to next step by click login button</p>
      }
      <br></br>
      <button 
        className="btn btn-primary" 
        type="submit" 
        disabled={!stripe}
        data-bs-toggle="modal" 
        data-bs-target="#payment"
      >
        Payment
      </button>

      <div className="modal fade" id="payment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title text-center" id="exampleModalLabel">Welcome</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  Your payment is successfully done. 
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
              </div>
          </div>
      </div>
      
    </form>
  );
};
export default SimpleCardForm;