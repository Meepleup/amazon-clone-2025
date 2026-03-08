import React, { useContext, useState } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


function Payment() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState("");

  if (!user) return <Navigate to="/auth" />;

  const total = basket.reduce((sum, item) => sum + item.price, 0);

const handleChange = (event) => {
    if (event.error) {
      setCardError(event.error.message);
    } else {
      setCardError("");
    }
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted");
  };

  return (
    <div>
      <h2>Payment</h2>

      <p>{user.email}</p>

      <h3>Total: ${total.toFixed(2)}</h3>

      <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} />

        {cardError && <small style={{ color: "red" }}>{cardError}</small>}

        <button disabled={!stripe}>
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Payment;
