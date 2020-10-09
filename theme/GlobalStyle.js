import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
    /* font-family: 'Roboto Mono', monospace; */
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.body} ;
    
    @keyframes buttonBlinkSmall {
      from {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      to {
        transform: scale(1.1);
      }
    }
    @keyframes buttonBlinkBig {
      from {
        transform: scale(1);
      }
      50% {
        transform: scale(1.4);
      }
      to {
        transform: scale(1.2);
      }
    }
}
`;

export default GlobalStyle;
