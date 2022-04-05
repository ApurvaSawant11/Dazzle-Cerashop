import { createContext, useContext, useReducer, useState } from "react";
import { initialOrderState, orderReducer } from "../reducer/orderReducer";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [state, orderDispatch] = useReducer(orderReducer, initialOrderState);
  const [order, setOrder] = useState({});

  const value = {
    priceDetails: state.priceDetails,
    orderAddress: state.orderAddress,
    orderDispatch,
    order,
    setOrder,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
