import { createContext, useContext, useEffect, useReducer } from "react";
import { initialReducerData, dataReducer } from "../reducer/dataReducer";
import axios from "axios";

const DataContext = createContext({
  contextData: initialReducerData,
  dispatch: () => {},
});

const DataProvider = ({ children }) => {
  const [contextData, dispatch] = useReducer(dataReducer, initialReducerData);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING" });

      try {
        const CategoriesResponse = await axios.get("/api/categories");

        dispatch({
          type: "SUCCESS_CATEGORIES",
          payload: CategoriesResponse.data.categories,
        });

        const ProductsResponse = await axios.get("/api/products");

        dispatch({
          type: "SUCCESS_PRODUCTS",
          payload: ProductsResponse.data.products,
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: "Error: Something is Wrong",
        });
      }
    })();
  }, []);

  const value = { contextData, dispatch };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
