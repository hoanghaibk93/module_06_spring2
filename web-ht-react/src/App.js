import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {Home} from "./component/home/Home";
import {Shop} from "./component/shop/Shop";
import {Detail} from "./component/detail/Detail";
import {Cart} from "./component/cart/Cart";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/detail" element={<Detail/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
  );
}

export default App;
