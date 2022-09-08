import { useQuery } from "@tanstack/react-query";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe('pk_test_51L4FX8EhNRtswp1ZwHJP122LD0R4H5xqdE02AI2pVAkdn2Ax1VnRrq9nJ1XEEkLfei20jaMQAVWUea6RBmTSuq3T00HbqNgxWl');

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;
  const {
    isLoading,
    error,
    data: orders,
  } = useQuery(["order"], () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div class="card w-50 max-w-md  shadow-xl my-5 rounded-none">
        <div class="card-body">
          <div className="flex gap-3">
            <div className=" p-1">
              <h5>
                Pay for Parts :
                 <span className="text-primary font-sans"> {orders.partsName}</span>
              </h5>
              <p>
                Please pay : 
                <span className="text-primary font-sans">${orders.price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl rounded-none">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
