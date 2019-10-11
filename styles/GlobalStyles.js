import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'AktivGrotesk';
    src: url('/static/fonts/aktiv_lt.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'AktivGrotesk';
    src: url('/static/fonts/AktivGrotesk-XBold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'AktivGrotesk';
    src: url('/static/fonts/AktivGrotesk-Medium.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  body {
    font-family: AktivGrotesk, sans-serif;
    color: #1C1C1C;
  }
`;

export default GlobalStyles;
