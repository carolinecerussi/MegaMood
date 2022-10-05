
import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "././components/Header";
import TShirt from './components/TShirt';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const TShirtListView = lazy(() => import("./views/tshirt/List"));
// const TShirtDetailView = lazy(() => import("./views/tshirt/Detail"));
// const CheckoutView = lazy(() => import("./views/cart/Checkout"));
// const CartView = lazy(() => import("./views/cart/Cart"));
// const [cart, setCart] = useState({});

// const initialOptions = {
//   "client-id": "test",
//   currency: "USD",
//   intent: "capture",
//   "data-client-token": "abc123xyz==",
// };

 function App() {
  return (
    <React.Fragment>
      <Header />
      <TShirt />
      {/* <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons />
      </PayPalScriptProvider> */}
      </React.Fragment> );
}

export default App();



