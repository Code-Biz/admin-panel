//YE LOGOUT COMPNENT HAI JISMAIN HAM USE EFFECT KAR K TOKENS KO REMOVE KRDETAY hain useAuthContext k zariay

import { useEffect } from "react";
import { useAuthContext } from "../store/contextsAndEffects_provider";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const { LogoutUser } = useAuthContext();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};
