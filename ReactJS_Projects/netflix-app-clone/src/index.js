import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { MovieProvider } from "./context/MovieContext";

ReactDOM.render(
  <>
    <GlobalStyles />
    <MovieProvider>
      <App />
    </MovieProvider>
  </>,
  document.getElementById("root")
);
