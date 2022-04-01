import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useData } from "../context/data-context";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("token"));
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const [token, setToken] = useState(localStorageToken?.token);
  const { dispatch } = useData();

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const { data: address } = await axios.get("api/user/address", {
            headers: {
              authorization: token,
            },
          });
          dispatch({
            type: "INITIALIZE_ADDRESS",
            payload: address.address,
          });
        } catch (error) {
          console.error("Error in initialize address context");
        }
      })();
    }
  }, []);

  const loginUser = async (email, password) => {
    if (email && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await axios.post("api/auth/login", {
          email: email,
          password: password,
        });

        if (status === 200) {
          localStorage.setItem(
            "token",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);

          localStorage.setItem("user", JSON.stringify({ user: foundUser }));

          setUser({ ...user, ...foundUser });
        }
      } catch (error) {
        console.log("Error in login user", error);
      }
    }
  };

  const signupUser = async (email, password, firstName, lastName) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await axios.post("api/auth/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });

      if (status === 201) {
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
      }
    } catch (error) {
      console.error("Error in login user", error);
    }
  };

  const addAddress = async (dispatch, address, token) => {
    try {
      const { data } = await axios.post(
        "api/user/address",
        {
          address,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({
        type: "ADDRESS",
        payload: data.address,
      });
    } catch (error) {
      console.error("Error in addAddress context", error);
    }
  };
  const removeAddress = async (dispatch, addressId, token) => {
    try {
      const { data } = await axios.delete(`api/user/address/${addressId}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: "ADDRESS",
        payload: data.address,
      });
    } catch (error) {
      console.error("Error in removeAddress context", error);
    }
  };

  const updateAddress = async (dispatch, address, token) => {
    try {
      const { data } = await axios.post(
        `api/user/address/${address._id}`,
        {
          address,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch({
        type: "ADDRESS",
        payload: data.address,
      });
    } catch (error) {
      console.error("Error in updateAddress context", error);
    }
  };

  const value = {
    token,
    setToken,
    user,
    setUser,
    loginUser,
    signupUser,
    addAddress,
    updateAddress,
    removeAddress,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
