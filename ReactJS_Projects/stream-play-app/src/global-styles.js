import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  /* box-sizing: border-box; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

html, body{
        color: #333;
        font-size:16px;
        direction: ltr;
}

body{
    background-color:#000;
    color:white;
}

img{
    max-width: 100%;
    height: auto;
    border: 0;
}

audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
}

  margin: 0 0 0.4em;
}

h2,h3,h4,h5{
  margin: 0.75em 0 0.25em;
}

.navbar {
  background-color: transparent;
}

.navbar.scrolled {
  background-color: #000;
}

`;
