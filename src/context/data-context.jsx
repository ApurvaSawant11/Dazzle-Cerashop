import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { initialReducerData, dataReducer } from "../reducer";
import axios from "axios";

const DataContext = createContext({
  state: initialReducerData,
  dispatch: () => {},
});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialReducerData);
  const [isLoaderActive, setIsLoaderActive] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data: categoriesList } = await axios.get("/api/categories");
        dispatch({
          type: "INITIALIZE_CATEGORIES",
          payload: categoriesList.categories,
        });

        const { data: productsList } = await axios.get("/api/products");
        dispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: productsList.products,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const value = {
    isLoaderActive,
    setIsLoaderActive,
    sortByHighLow: state.sortByHighLow,
    sortByRating: state.sortByRating,
    priceRange: state.priceRange,
    sliderValue: state.sliderValue,
    categoryGroupName: state.categoryGroupName,
    categoriesList: state.categoriesList,
    productsList: state.productsList,
    address: state.address,
    search: state.search,
    dispatch: dispatch,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
