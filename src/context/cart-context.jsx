import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { cartReducer } from "../reducer";

const CartContext = createContext({
  state: { cartList: [] },
  cartDispatch: () => {},
});

const CartProvider = ({ children }) => {
  const [state, cartDispatch] = useReducer(cartReducer, { cartList: [] });
  const [couponDetails, setCouponDetails] = useState({
    couponCode: "",
    value: 0,
  });

  const addToCart = async (cartDispatch, product, token) => {
    try {
      const {
        data: { cart },
      } = await axios.post(
        "api/user/cart",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      cartDispatch({
        type: "SET_CART",
        payload: cart,
      });
    } catch (error) {
      console.error("Error in addToCart Context", error);
    }
  };
  const removeFromCart = async (_id, cartDispatch, token) => {
    try {
      const {
        data: { cart },
      } = await axios.delete(`api/user/cart/${_id}`, {
        headers: {
          authorization: token,
        },
      });
      cartDispatch({
        type: "SET_CART",
        payload: cart,
      });
    } catch (error) {
      console.error("Error in removeFromCart Context", error);
    }
  };

  const updateCartQuantity = async (_id, cartDispatch, token, actionType) => {
    try {
      const {
        data: { cart },
      } = await axios.post(
        `api/user/cart/${_id}`,
        {
          action: {
            type: actionType === "INC_QTY" ? "increment" : "decrement",
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      cartDispatch({
        type: "SET_CART",
        payload: cart,
      });
    } catch (error) {
      console.error("Error in updateCartQuantity Context", error);
    }
  };

  const value = {
    cartList: state.cartList,
    cartDispatch: cartDispatch,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    couponDetails,
    setCouponDetails,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
