import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
  }

  
`;
