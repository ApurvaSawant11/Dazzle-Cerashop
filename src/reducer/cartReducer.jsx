const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cartList: [...action.payload] };

    case "LOG_OUT":
      return { ...state, cartList: [] };
  }
};

export { cartReducer };
