const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      return { ...state, wishlist: [...action.payload] };

    case "LOG_OUT":
      return { ...state, wishlist: [] };

    default:
      throw new Error("Error in Wishlist Reducer");
  }
};

export { wishlistReducer };
