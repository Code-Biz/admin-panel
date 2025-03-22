// THIS IS A STORE WHERE DIFFERENTS CONTEXTS ARE CREATED AND PROVIDED TO COMPONENTS GLOBALLY
// FOR EXAMPLE WE CREATED THE AUTHENTICATION CONTEXTS AND THEN PROVIDED THE CREATED AUTH CONTEXTS TO THE COMPONENTS
// THAT USED THE AUTHENTICACTION CONTEXTS or i.e CONSUMERS THAT CONSUMED AUTH CONTEXT.

// If a same piece of code is being used in many places we then create a component or context for that.

import { useContext, createContext, useState, useEffect } from "react";

// const createAuthContexts = createContext();

//this below line just an extra statment to use the term authContext nothing else
export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token_InLS"));
  const [services, setService] = useState([]);
  const [userData, setUserData] = useState([]);

  //CONTEXT 1
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("Token_InLS", serverToken);
  };

  //CONTEXT 2
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("Token_InLS");
  };

  //CONTEXT 3
  const isLogged = !!token;
  // if here we don't use !! then token value will be assigned to isLogged, Now if we use ! then boolean value of toke with
  // negation will be stored in isLogged i.e for if there is some value then token will be true but false will be stored
  // and vice versa using !! we can store true for if token exists and false in isLogged for if theres no token stored

  const userVerifier = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const user_Data = await response.json();
        setUserData(user_Data.data);
      }
    } catch (error) {}
  };

  const getServices = async () => {
    try {
      const fetch_service_from_bcknd = await fetch(
        "http://localhost:3000/api/services/all",
        {
          method: "GET",
        }
      );

      if (fetch_service_from_bcknd.ok) {
        const response_data = await fetch_service_from_bcknd.json();
        setService(response_data.msg);
      }
    } catch (error) {}
  };

  //EFFECT 1 -------- To fetch logged in user data
  useEffect(() => {
    getServices();
    userVerifier();
  }, []);

  return (
    <authContext.Provider
      value={{ storeTokenInLS, LogoutUser, isLogged, services, userData }}
    >
      {children}
    </authContext.Provider>

    // we are providing the storeTokenInLS, LogoutUser and isLogged contexts functions to the childrens  of <authContext.Provider> i.e the components or pieces of code using this provider or wrapped inside it e.g as in the main.jsx file or say providing to the whole react application
  );
};

export const useAuthContext = () => {
  if (!useContext(authContext)) {
    throw new Error(
      " useAuthContext used outside the Provider. It means that useAuthContext is being used or called in some part of code where no value is being provided that could be used in creating the context in store.jsx so that it i.e that value or context can then be provided to other components globally (maybe). ====>> OR MAYBE IT ONLY MEANS Its not being used in the main.jsx"
    );
  }
  return useContext(authContext);
};
