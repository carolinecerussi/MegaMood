
import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import TopMenu from "./components/TopMenu";
import Header from "././components/Header";
// import "./App.min.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const TShirtListView = lazy(() => import("./views/tshirt/List"));
// const TShirtDetailView = lazy(() => import("./views/tshirt/Detail"));
// const CheckoutView = lazy(() => import("./views/cart/Checkout"));
// const CartView = lazy(() => import("./views/cart/Cart"));
// const [cart, setCart] = useState({});

const initialOptions = {
  "client-id": "test",
  currency: "USD",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};

 function App() {
  return (
    <React.Fragment>
      <Header />
      <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons />
      </PayPalScriptProvider>
      </React.Fragment> );
}

export default App();




// function App() {


//   export default function App() {
//     return (
//         <PayPalScriptProvider options={{ "client-id": "test" }}>
//             <PayPalButtons style={{ layout: "horizontal" }} />
//         </PayPalScriptProvider>
//     );
//   }
  
// // }
// //   return (
// //     <BrowserRouter>
// //     <React.Fragment>
// //       <Header />
// //       {/* <TopMenu /> */}
// //       <Suspense fallback={ <div className='text-white text center mt-3'> Loading...</div>}>
// //   <Routes>
// //     {/* <Route exact path="/" element={HomeView} /> */}
// //     {/* <Route exact path = "/cart" element {CartView} />
// //     <Route exact path = "checkout" element {CheckoutView} /> */}
// //     <Route exact path="/tshirt" element={<TShirtListView/>} />
// //     <Route exact path="/tshirt/detail" element={<TShirtDetailView/>} />
// //     </Routes>
// //     </Suspense>
// //   </React.Fragment>
// //   </BrowserRouter> 
// //   );
// // }

// export default App;




