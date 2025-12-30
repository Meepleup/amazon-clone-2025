import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "../components/LayOut/LayOut";
import Landing from "../Pages/Landing/Landing";
import Auth from "../Pages/Auth/Auth";
import SignUp from "../Pages/Auth/SignUp";
import Cart from "../Pages/Cart/Cart";
import Payment from "../Pages/Payment/Payment";
import Orders from "../Pages/Orders/Orders";

function Router() {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}

export default Router;
