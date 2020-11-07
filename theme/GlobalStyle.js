import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html{
  scroll-behavior: smooth;
}

body{
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.body};
    transition: background-color 0.5s;
}`;

export default GlobalStyle;
