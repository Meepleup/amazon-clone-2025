import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/DataProvider/DataProvider";
import { reducer, initialState } from "./Utility/reducer";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_YOUR_PUBLIC_KEY");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <DataProvider reducer={reducer} initialState={initialState}>
          
          <App />
        </DataProvider>
      </Elements>
    </BrowserRouter>
  </React.StrictMode>
);
