import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { DataProvider, AuthProvider, WishlistProvider, CartProvider, OrderProvider } from "./context";

import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderProvider>
        <WishlistProvider>
            <CartProvider>
              <DataProvider>
                <AuthProvider>
                  <App/>
                </AuthProvider>
              </DataProvider>
            </CartProvider>
        </WishlistProvider>
      </OrderProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
