import React from "react";
import { Navigate } from "react-router-dom";

import * as ROUTES from "../routes/routes";

// IF THE USER EXISTS REDIRECT
export function IsUserExistsRedirect({ user, children }) {
  console.log(user);
  return user ? <Navigate to={ROUTES.MAIN} /> : children;
}

export function ProtectedRoute({ user, children }) {
  console.log(user);
  return user ? children : <Navigate to={ROUTES.SIGN_IN} />;
}
