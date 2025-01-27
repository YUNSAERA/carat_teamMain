import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  #root,
  html,
  body {
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 18px;
    background: #141233;
    color: #fff;
  }
`;

export default GlobalStyle;
