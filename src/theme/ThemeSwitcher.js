import React from "react";
import {
  Container,
  Label,
  Switch,
  Input,
  Slider,
} from "./ThemeSwitcher.styled";

export const ThemeSwitcher = ({ checked, onChange, theme, label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Switch>
        <Input type="checkbox" checked={checked} onChange={onChange} />
        <Slider checked={checked} theme={theme} />
      </Switch>
    </Container>
  );
};
