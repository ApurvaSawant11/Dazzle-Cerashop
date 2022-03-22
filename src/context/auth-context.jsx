import { createContext, useContext, useState, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("token"));
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const [token, setToken] = useState(localStorageToken?.token);

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

  const value = { token, setToken, user, setUser, loginUser, signupUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
