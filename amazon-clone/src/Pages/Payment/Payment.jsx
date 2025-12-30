import { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!user) return;

    const orderRef = doc(
      db,
      "users",
      user.uid,
      "orders",
      Date.now().toString()
    );

    await setDoc(orderRef, {
      basket,
      created: new Date(),
      amount: basket.reduce((sum, item) => sum + item.price, 0),
    });

    dispatch({ type: "EMPTY_BASKET" });
    navigate("/orders");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Payment</h2>
      <button onClick={handlePayment}>Place Order</button>
    </div>
  );
}

export default Payment;
