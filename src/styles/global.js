import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  
  html, body, #root {
    width: 100%;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 1000px) {
      font-size: 60%;
    }

    @media (max-width: 900px) {
      font-size: 58%;
    }

    @media (max-width: 800px) {
      font-size: 57%;
    }

    @media (max-width: 700px) {
      font-size: 56%;
    }

    @media (max-width: 600px) {
      font-size: 55%;
    }

  }
`;

export default Global;
