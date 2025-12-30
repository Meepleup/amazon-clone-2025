import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [{ basket }] = useContext(DataContext);
  const navigate = useNavigate();

  const total = basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cart}>
      <div className={styles.items}>
        <h2>Your Shopping Basket</h2>

        {basket.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.image} alt={item.title} />

            <div className={styles.info}>
              <p>{item.title}</p>
              <strong>${item.price}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <p>
          Subtotal ({basket.length} items):
          <strong> ${total.toFixed(2)}</strong>
        </p>
        <button onClick={() => navigate("/payment")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
