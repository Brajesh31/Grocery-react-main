import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ totalAmount, handleCheckout }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create payment method with card details
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      alert(error.message);
    } else {
      handleCheckout(token.id); // Pass the token to handleCheckout
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card p-3 my-3">
        <CardElement options={{ hidePostalCode: true }} />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="btn btn-primary btn-lg w-100"
      >
        Proceed to Checkout
      </button>
    </form>
  );
};

export default PaymentForm;
