// themes.js
import { createGlobalStyle } from "styled-components";

export const light = {
  colors: {
    background: "#ffffff",
    primary: "#ffffff",
    secondary: "#f0edfe",
    text: "#000000",
    tableHeader: "#B1B1B1",
    tableRowHover: "#f0edfe",
    selectedRow: "#f0edfe",
    tableRowBorderBottom: "#e1e1e1",
    input: "#8173cf",
    slider: "#8173cf",
  },
  fonts: {
    avenirHeavy: "Avenir Heavy",
    avenirBook: "Avenir Book",
  },
  tableBoxShadow: "0 4px 6px rgba(0,0,0,0.3)",
};

export const dark = {
  colors: {
    background: "#000000",
    primary: "#000000",
    secondary: "#8173cf",
    text: "#ffffff",
    tableHeader: "#808080",
    tableRowHover: "#8173cf",
    selectedRow: "#8173cf",
    tableRowBorderBottom: "#e1e1e1",
    input: "#f0edfe",
    slider: "#ffffff",
  },
  fonts: {
    avenirHeavy: "Avenir Heavy",
    avenirBook: "Avenir Book",
  },
  tableBoxShadow: "0 4px 6px rgba(255,255,255,0.3)",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
