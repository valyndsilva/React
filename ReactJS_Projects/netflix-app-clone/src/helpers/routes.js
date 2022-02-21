import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import * as ROUTES from "../constants/routes";
export function IsUserExistsRedirect({ children }) {
  const auth = getAuth();
  //   console.log(auth);

  const [user, setUser] = useState("");
  //if user exists render browse page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        // console.log(currentUser);
        setUser(currentUser);
        // ...
      } else {
        // User is signed out
        // signOut(auth);
        return null;
      }
    });
    return unsubscribe;
  }, [auth]);

  return user ? <Navigate to={ROUTES.BROWSE} /> : children;
}

export function ProtectedRoute({ children }) {
  const auth = getAuth();

  console.log(auth.currentUser);
  //if user exists render browse page
  return auth.currentUser ? children : <Navigate to={ROUTES.SIGN_IN} />;
}
