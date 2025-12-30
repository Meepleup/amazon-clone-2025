import React, { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { type } from "../../Utility/actionType";
import { Navigate, useNavigate } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  if (!user) return <Navigate to="/auth" />;

  const total = basket.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    dispatch({ type: type.EMPTY_BASKET });
    navigate("/orders");
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>{user.email}</p>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={placeOrder}>Place Order (Demo)</button>
    </div>
  );
}

export default Payment;
