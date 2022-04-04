import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { wishlistReducer } from "../reducer";
import { ErrorIcon, HeartIcon, RemoveIcon } from "../assets";

const WishlistContext = createContext({
  state: { wishlist: [] },
  wishlistDispatch: () => {},
});

const WishlistProvider = ({ children }) => {
  const [state, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });

  const addToWishlist = async (dispatch, product, token, toast) => {
    try {
      const {
        data: { wishlist },
      } = await axios.post(
        "api/user/wishlist",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({
        type: "SET_WISHLIST",
        payload: wishlist,
      });
      toast.success("Added to Wishlist", {
        icon: <HeartIcon className="danger-text" size="2rem" />,
      });
    } catch (error) {
      console.error("Error in addToWishlist Context", error);
      toast.error("Error adding to Wishlist", {
        icon: <ErrorIcon className="danger-text" size="2rem" />,
      });
    }
  };
  const removeFromWishlist = async (_id, dispatch, token, toast) => {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`api/user/wishlist/${_id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: "SET_WISHLIST",
        payload: wishlist,
      });
      toast.warn("Removed from Wishlist", {
        icon: <RemoveIcon size="2rem" />,
      });
    } catch (error) {
      console.error("Error in removeFromWishlist Context", error);
      toast.error("Error removing the product", {
        icon: <ErrorIcon size="2rem" />,
      });
    }
  };

  const value = {
    wishlist: state.wishlist,
    wishlistDispatch: wishlistDispatch,
    addToWishlist,
    removeFromWishlist,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
