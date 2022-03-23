import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { DataProvider, AuthProvider, WishlistProvider, CartProvider } from "./context";

import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <WishlistProvider>
      <CartProvider>
      <AuthProvider>
        <DataProvider>
          <App/>
        </DataProvider>
      </AuthProvider>
      </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
