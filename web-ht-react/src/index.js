import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Header } from "./component/common/header/Header";
import { Footer } from "./component/common/footer/Footer";
import { ValueIconCartProvider } from './service/ValueIconCartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <ValueIconCartProvider>
        <Header />
        <App />
        <Footer />
      </ValueIconCartProvider>
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
