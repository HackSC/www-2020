import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: black	
    ;
  }
`;

export default GlobalStyles;
