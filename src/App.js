
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import TopMenu from "./components/TopMenu";
import Header from "././components/Header";
import Footer from "./components/Footer";
import "./App.min.css";
const TShirtListView = lazy(() => import("./views/tshirt/List"));
const TShirtDetailView = lazy(() => import("./views/tshirt/Detail"));
// const CheckoutView = lazy(() => import("./views/cart/Checkout"));
// const CartView = lazy(() => import("./views/cart/Cart"));
// const [cart, setCart] = useState({});

function App() {

  return (
    <BrowserRouter>
    <React.Fragment>
      <Header />
      {/* <TopMenu /> */}
      <Suspense fallback={ <div className='text-white text center mt-3'> Loading...</div>}>
  <Routes>
    {/* <Route exact path="/" element={HomeView} /> */}
    {/* <Route exact path = "/cart" element {CartView} />
    <Route exact path = "checkout" element {CheckoutView} /> */}
    <Route exact path="/tshirt" element={<TShirtListView/>} />
    <Route exact path="/tshirt/detail" element={<TShirtDetailView/>} />
    </Routes>
    </Suspense>
    <Footer /> 
  </React.Fragment>
  </BrowserRouter> 
  );
}

export default App;




