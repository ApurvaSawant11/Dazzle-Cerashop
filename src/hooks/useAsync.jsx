import { useEffect, useReducer } from "react";
import axios from "axios";

import { sharedReducer } from "../reducer/sharedReducer";

const initialReducerState = {
  data: null,
  error: null,
  status: null,
};

const useAsync = (apiToCall) => {
  const { api, property } = apiToCall;
  const [state, dispatch] = useReducer(sharedReducer, initialReducerState);

  console.log("after reducer", state);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING" });

      try {
        const response = await axios.get(api);

        dispatch({
          type: "SUCCESS",
          payload: response.data[property],
        });
      } catch (error) {
        console.log("error");
        dispatch({
          type: "ERROR",
          payload: "Error: Something is Wrong",
        });
      }
    })();
  }, [apiToCall]);

  console.log("state: ", state);
  return { state, dispatch };
};

export { useAsync };
