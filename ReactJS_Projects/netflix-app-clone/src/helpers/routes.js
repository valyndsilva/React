import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
        signOut(auth);
      }
    });
    return unsubscribe;
  }, [auth]);
  return user ? <Navigate to="/browse" /> : children;
  // <Navigate replace to={{ pathname: loggedInPath }} />
}

export function ProtectedRoute({ children }) {
  const auth = getAuth();

  console.log(auth.currentUser);
  //if user exists render browse page
  return auth.currentUser ? children : <Navigate to="/signin" />;
}
