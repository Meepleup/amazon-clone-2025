import React, { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";

function Cart() {
  const [{ basket }] = useContext(DataContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Shopping Basket</h2>

      {basket.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {basket.map((item, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "20px" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", marginRight: "20px" }}
              />
              <div>
                <p>{item.title}</p>
                <strong>${item.price}</strong>
              </div>
            </div>
          ))}

          <h3>
            Subtotal ({basket.length} items): $
            {basket.reduce((t, i) => t + i.price, 0).toFixed(2)}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;
