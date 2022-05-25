import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useData } from "../context/data-context";
import { CheckMarkIcon, ErrorIcon, RemoveIcon } from "../assets";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("token"));
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const [token, setToken] = useState(localStorageToken?.token);
  const { dispatch } = useData();

  useEffect(() => {
    if (token) {
      dispatch({
        type: "INITIALIZE_ADDRESS",
        payload: user.address,
      });
    }
  }, [user]);

  const loginUser = async (email, password, toast) => {
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

          setUser(foundUser);

          dispatch({
            type: "INITIALIZE_ADDRESS",
            payload: foundUser.address,
          });

          toast.success(`Welcome to Cerashop! 😄`);
        }
      } catch (error) {
        console.log("Error in login user", error);
        toast.error("Error in login", {
          icon: <ErrorIcon clasname="danger-text" size="2rem" />,
        });
      }
    }
  };

  const signupUser = async (email, password, firstName, lastName, toast) => {
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
        toast.success(`Welcome to Dazzle Cerashop ${firstName} 😄`);
      }
    } catch (error) {
      console.error("Error in signup user", error);
      toast.error("Error in signup", {
        icon: <ErrorIcon clasname="danger-text" size="2rem" />,
      });
    }
  };

  const addAddress = async (dispatch, address, token, toast) => {
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
      toast.success("Address added!", { icon: <CheckMarkIcon size="2rem" /> });
    } catch (error) {
      console.error("Error in addAddress context", error);
      toast.error("Sorry! Could not add Address", {
        icon: <ErrorIcon size="2rem" />,
      });
    }
  };
  const removeAddress = async (dispatch, addressId, token, toast) => {
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
      toast.error("Address removed", { icon: <RemoveIcon size="2rem" /> });
    } catch (error) {
      console.error("Error in removeAddress context", error);
      toast.error("Sorry! Could not remove address", {
        icon: <ErrorIcon size="2rem" />,
      });
    }
  };

  const updateAddress = async (dispatch, address, token, toast) => {
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
      toast.success("Address updated!", {
        icon: <CheckMarkIcon size="2rem" />,
      });
    } catch (error) {
      console.error("Error in updateAddress context", error);
      toast.error("Sorry! Could not update address", {
        icon: <ErrorIcon size="2rem" />,
      });
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
