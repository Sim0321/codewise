import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 62.5%;
    
  }
  * {
    box-sizing: border-box;
  }
  
  body{
    font-size: 1.6rem;
    background-color: ${theme.backGround.default};
    font-family: 'Noto Sans KR', sans-serif;
  }

  
`;
