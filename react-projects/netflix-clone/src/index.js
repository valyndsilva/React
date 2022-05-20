import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { TmdbProvider } from "./context/TmdbContext";
import { CardProvider } from "./context/CardContext";
import { GlobalProvider } from "./context/GlobalContext";
import { PlayerProvider } from "./context/PlayerContext";

ReactDOM.render(
  <>
    <GlobalProvider>
      <GlobalStyles />

      <TmdbProvider>
        <PlayerProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </PlayerProvider>
      </TmdbProvider>
    </GlobalProvider>
  </>,
  document.getElementById("root")
);
