// themes.js
import { createGlobalStyle } from "styled-components";

export const light = {
  background: "white",
  textPrimary: "black",
  textSecondary: "royalblue",
  tableHeaderColor: "#f7f7f6",
  selectedRowColor: "#f0edfe",
  tableRowBorderBottomColor: "#e1e1e1",
  inputSelectionColor: "#8173cf",
  tableRowHoverColor: "Black",
  tableBoxShadow:
    "4px 4px 8px rgba(0, 0, 0, 0.2), 6px 6px 20px rgba(0, 0, 0, 0.19)",
  avenirHeavy: "Avenir Heavy",
  avenirBook: "Avenir Book",
};

export const dark = {
  background: "black",
  textPrimary: "white",
  textSecondary: "grey",
  tableHeaderColor: "#333",
  selectedRowColor: "#0A2A5E",
  tableRowBorderBottomColor: "#e1e1e1",
  inputSelectionColor: "white",
  tableRowHoverColor: "White",
  tableBoxShadow:
    "4px 4px 8px rgba(255, 255, 255, 0.2), 6px 6px 20px rgba(255, 255, 255, 0.19)",
  avenirHeavy: "Avenir Heavy",
  avenirBook: "Avenir Book",
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
