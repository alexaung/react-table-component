// themeSwitcher.js
import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.buttonColor}; 
  background-color: ${(props) => props.theme.buttonColor}; 
  border: 2px ${(props) => props.theme.buttonColor}; solid;
  float: right;
  transition: all 0.5s;
  cursor: pointer;
`;

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </Button>
  );
}
