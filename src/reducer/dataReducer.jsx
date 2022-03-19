const initialReducerData = {
  sortByHighLow: "",
  priceRange: { min: 0, max: 19999 },
  sliderValue: { left: 0, right: 0 },
  categoriesList: {},
  sortByRating: "",
  productsList: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CATEGORIES":
      const obj = action.payload.reduce(
        (accumulator, category) => ({
          ...accumulator,
          [`${category.categoryName}`]: false,
        }),
        {}
      );
      return {
        ...state,
        categoriesList: {
          ...state.categoriesList,
          ...obj,
        },
      };

    case "INITIALIZE_PRODUCTS":
      return {
        ...state,
        productsList: action.payload,
      };

    case "PRICE_RANGE":
      // console.log("youo", action.payload.min);
      return {
        ...state,
        priceRange: action.payload,
        sliderValue: {
          left: (action.payload.min / 19999) * 100,
          right: 100 - (action.payload.max / 19999) * 100,
        },
      };

    case "SORT_BY_HIGH_LOW":
      return {
        ...state,
        sortByHighLow: action.payload,
      };

    case "SORT_BY_RATING":
      return {
        ...state,
        sortByRating: action.payload,
      };

    case "CATEGORY":
      return {
        ...state,
        categoriesList: {
          ...state.categoriesList,
          ...action.payload,
        },
      };

    case "CLEAR_FILTER":
      for (const cat in state.categoriesList) {
        state.categoriesList[cat] = false;
      }
      return {
        sortByHighLow: "",
        categoriesList: state.categoriesList,
        sortByRating: "",
        priceRange: { min: 0, max: 19999 },
        sliderValue: { left: 0, right: 0 },
        productsList: action.payload,
      };

    default:
      throw new Error("Error in reducer");
  }
};

export { initialReducerData, dataReducer };
