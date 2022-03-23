const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartList: [...action.payload] };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: [...action.payload] };

    case "UPDATE_CART_QUANTITY":
      return { ...state, cartList: [...action.payload] };

    case "LOG_OUT":
      return { ...state, cartList: [] };
  }
};

export { cartReducer };
