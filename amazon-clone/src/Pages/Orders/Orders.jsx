import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import { collection, getDocs } from "firebase/firestore";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      const ordersRef = collection(db, "users", user.uid, "orders");
      const snapshot = await getDocs(ordersRef);

      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };

    fetchOrders();
  }, [user]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Orders</h2>

      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map((order) => (
        <div key={order.id}>
          <p>Total: ${order.amount}</p>
          <p>Items: {order.basket.length}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
