import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {  DataProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/FilterContect";
import { CartProvider } from "./context/CartContext";
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <Auth0Provider
  domain="dev-fx8k5z4koqnmj7jo.us.auth0.com"
  clientId="ItsQiq7iteVraIueY22zmUihnyebyx7S"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
<DataProvider>
    <FilterContextProvider>
        <CartProvider>
        <App />
        </CartProvider>

    </FilterContextProvider>
    
</DataProvider>   
</Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
