import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#32325d',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
    },
  },
};

export default function StripeCardForm({ username, onCardSaved }) {
  const stripe = useStripe();
  const elements = useElements();
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage('');

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/payment/attach-card', {
        username: username,
        payment_method_id: paymentMethod.id,
      });

      setMessage('Card saved successfully!');
      if (onCardSaved) {
        onCardSaved(paymentMethod);
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error saving card.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border p-4 rounded">
        <CardElement options={CARD_OPTIONS} />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        {loading ? 'Saving...' : 'Save Payment Card'}
      </button>
      {message && (
        <p className={`mt-2 text-sm ${message.includes('error') ? 'text-red-500' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
