const initialReducerData = {
  categoriesList: null,
  productsList: null,
  status: null,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, status: "loading" };
    case "SUCCESS_CATEGORIES":
      return { ...state, status: "success", categoriesList: action.payload };
    case "SUCCESS_PRODUCTS":
      return { ...state, status: "success", productsList: action.payload };
    case "ERROR":
      return { ...state, status: "error", error: action.payload };
    default:
      return state;
  }
};

export { initialReducerData, dataReducer };
