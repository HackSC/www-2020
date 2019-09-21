import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background: blue;
    color: ${({ theme }) => theme.color.white};
  }
`;

export default GlobalStyles;
