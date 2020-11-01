import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
   font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    height: 100%;
    background: #f1f1f1;
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    overflow-x: hidden;
  }
`;

export { GlobalStyle };
