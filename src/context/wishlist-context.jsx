import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { wishlistReducer } from "../reducer";

const WishlistContext = createContext({
  state: { wishlist: [] },
  wishlistDispatch: () => {},
});

const WishlistProvider = ({ children }) => {
  const [state, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });

  const addToWishlist = async (dispatch, product, token) => {
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
    } catch (error) {
      console.error("Error in addToWishlist Context", error);
    }
  };
  const removeFromWishlist = async (_id, dispatch, token) => {
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
    } catch (error) {
      console.error("Error in removeFromWishlist Context", error);
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
