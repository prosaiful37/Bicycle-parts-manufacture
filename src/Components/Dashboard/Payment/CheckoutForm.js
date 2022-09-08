import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({orders}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [cardError, setCardError] = useState("");
  const [transctionId, setTransctionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  
  const { _id, price, email,  name } = orders;

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
        method: "POST",
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify({ price }),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });


  },[price])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");

// confirme card 
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransctionId(paymentIntent.id);
      setSuccess("Congrats ! Your Payment is completed");

    // store payments on database
      const payments = {
        orders: _id,
        transctionId: paymentIntent.id,
      }
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payments),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          toast.success('Payment added successfully');
        });
    }


  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-3"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-error font-sans font-bold">{cardError}</p>}
      {success && (
        <div className="text-success font-sans">
          <p>{success}</p>
          <p>
            Your Transction Id:{" "}
            <span className="text-primary font-bold">{transctionId}</span>
          </p>
        </div>
      )}


    </>
  );
};


export default CheckoutForm;
