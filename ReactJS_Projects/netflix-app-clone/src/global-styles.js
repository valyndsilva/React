import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

* {
  /* box-sizing: border-box; */
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
  box-sizing: border-box;
}

html, body{
    font-family{
        font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color: #333;
        font-size:16px;
    }
}

body{
    background-color:#000;
    color:white;
}

.navbar {
  background-color: transparent;
}

.navbar.scrolled {
  background-color: #000;
}

`;
