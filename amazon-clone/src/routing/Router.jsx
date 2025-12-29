import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../Pages/Landing/Landing";
import Results from "../Pages/Results/Results";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Cart from "../Pages/Cart/Cart";
import Payment from "../Pages/Payment/Payment";
import Orders from "../Pages/Orders/Orders";
import Auth from "../Pages/Auth/Auth";
import SignUp from "../Pages/Auth/SignUp";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
