import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-image: linear-gradient(90deg, #ED213A 0%, pink 100%);
    color: ${({ theme }) => theme.color.white};
  }
`;

export default GlobalStyles;
