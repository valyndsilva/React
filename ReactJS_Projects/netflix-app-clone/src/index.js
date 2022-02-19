import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { MovieProvider } from "./context/MovieContext";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/FirebaseContext";

ReactDOM.render(
  <>
    <GlobalStyles />
    <FirebaseContext.Provider value={{ firebase }}>
      <MovieProvider>
        <App />
      </MovieProvider>
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
