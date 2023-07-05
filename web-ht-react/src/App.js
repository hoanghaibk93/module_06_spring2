import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {Home} from "./component/home/Home";
import {Shop} from "./component/shop/Shop";
import {Detail} from "./component/detail/Detail";
import {Cart} from "./component/cart/Cart";
import { ToastContainer } from 'react-toastify';
import LoginForm from './component/auth/LoginForm';
import { Payment } from './component/payment/Payment';
import { PaymentStatus } from './component/payment/PaymentStatus';
import { HistoryBuyProduct } from './component/history/HistoryBuyProduct';
import { InformationPersonal } from './component/InformationPersonal/InformationPersonal';
import { Error404 } from './component/error/Error404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/payment" element={<Payment/>} />
          <Route path="/cart/payment" element={<PaymentStatus/>} />
          <Route path="/product/history" element={<HistoryBuyProduct/>} />
          <Route path="/information" element={<InformationPersonal/>}/>
          <Route path='*' element={<Error404/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
