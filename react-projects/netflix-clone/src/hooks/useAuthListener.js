import { useState, useEffect } from "react";
import { auth } from "../lib/firebase.prod";
import { onAuthStateChanged } from "firebase/auth";
export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userCredentials.currentUser"))
  );
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        // console.log(currentUser);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        setUser(currentUser);
      } else {
        // User is signed out or does not exist remove user from localStorage
        localStorage.removeItem("currentUser");
        setUser(null);
      }
    });
    return () => listener(); // clean up the listener to avoid getting any unmounted error
  }, []);
  return { user };
}
