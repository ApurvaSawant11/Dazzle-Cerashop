import React from "react";
import "./cart.css";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";
import { CartCard } from "../../components";
import { useCart, useWishlist } from "../../context";

const Cart = () => {
  const { cartList, cartDispatch } = useCart();
  const { wishlist } = useWishlist();

  const isCartEmpty = cartList.length < 1;

  return (
    <div>
      <main>
        <h4 className="text-center text-uppercase p-1">My Cart</h4>
        {isCartEmpty ? (
          <p>
            Oops! Your cart is empty! 😓. Add product to your cart from{" "}
            <Link to="/products" className="secondary-text">
              HERE
            </Link>
          </p>
        ) : (
          <div className="table-container m-auto">
            <div className="cart-header">
              <span className="cart-header-item pb-1">Product</span>
              <span className="cart-header-item pb-1 text-center">
                Quantity
              </span>
              <span className="cart-header-item pb-1 text-right">SubTotal</span>
            </div>
            {cartList.map((product) => (
              <CartCard
                key={product._id}
                productDetails={product}
                wishlist={wishlist}
                dispatch={cartDispatch}
              />
            ))}
          </div>
        )}

        {!isCartEmpty && <CartSummary />}
      </main>
    </div>
  );
};

export { Cart };
