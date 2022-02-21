import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { MovieProvider } from "./context/MovieContext";

ReactDOM.render(
  <>
    <GlobalStyles />
    {/* <FirebaseContext.Provider value={{ firebase }}> */}
    <MovieProvider>
      <App />
    </MovieProvider>
    {/* </FirebaseContext.Provider> */}
  </>,
  document.getElementById("root")
);
