import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utils";

function PrivateRoute({ children }) {
  useEffect(() => {
    if (!isLogin()) {
      alert("To access the panel page, please login");
    }
  }, []);

  return <>{isLogin() ? children : <Navigate to="/login" />}</>;
}

export default PrivateRoute;
