// THIS IS A STORE WHERE DIFFERENTS CONTEXTS ARE CREATED AND PROVIDED TO COMPONENTS GLOBALLY
// FOR EXAMPLE WE CREATED THE AUTHENTICATION CONTEXTS AND THEN PROVIDED THE CREATED AUTH CONTEXTS TO THE COMPONENTS
// THAT USED THE AUTHENTICACTION CONTEXTS or i.e CONSUMERS THAT CONSUMED AUTH CONTEXT.
import { useContext, createContext } from "react";

// const createAuthContexts = createContext();

//this below line just an extra statment to use the term authContext nothing else
export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("Token_InLS", serverToken);
  };

  return (
    <authContext.Provider value={{ storeTokenInLS }}>
      {children}
    </authContext.Provider>
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
