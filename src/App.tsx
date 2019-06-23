import React from "react";
import HomePage from "./components/pages/HomePage";
import { createGlobalStyle } from "styled-components";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <HomePage />
  </>
);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default App;
