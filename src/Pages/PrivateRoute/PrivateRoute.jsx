import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
