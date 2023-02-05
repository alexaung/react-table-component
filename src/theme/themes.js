// themes.js
import { createGlobalStyle } from "styled-components";

export const light = {
  background: "#ffffff",
  primary: "#ffffff",
  secondary: "#f0edfe",
  text: "#000000",
  tableHeaderColor: "#B1B1B1",
  tableRowHoverColor: "#f0edfe",
  selectedRowColor: "#f0edfe",
  tableRowBorderBottomColor: "#e1e1e1",
  inputColor: "#8173cf",
  avenirHeavy: "Avenir Heavy",
  avenirBook: "Avenir Book",
  tableBoxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  slider: "#8173cf"
};


export const dark = {
  background: "#000000",
  primary: "#000000",
  secondary: "#8173cf",
  text: "#ffffff",
  tableHeaderColor: "#808080",
  tableRowHoverColor: "#8173cf",
  selectedRowColor: "#8173cf",
  tableRowBorderBottomColor: "#e1e1e1",
  inputColor: "#f0edfe",
  avenirHeavy: "Avenir Heavy",
  avenirBook: "Avenir Book",
  tableBoxShadow: "0 4px 6px rgba(255,255,255,0.1)",
  slider: "#ffffff"
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
