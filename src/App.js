import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Table from "./Table/Table";
import data from "./data/contract.json";
import { light, dark, ThemeSwitcher, GlobalStyles } from "./theme";
import { AppContainer, ControlContainer, TableContainer } from "./App.styled";


function App() {
  const [theme, setTheme] = useState("light");
  const currentTheme = theme === "light" ? light : dark;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // const columns = [
  //   { title: "Operator", field: "operator", sortable: true },
  //   { title: "Headset Display", field: "headset_display", sortable: true },
  //   { title: "3G Availability", field: "availability", sortable: true },
  // ];

  const columns = [
    { title: "Name", field: "name", sortable: true },
    { title: "Mobile", field: "mobile", sortable: true },
    { title: "Expiry", field: "expiry", sortable: true },
    { title: "Penalty", field: "penalty", sortable: true },
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <AppContainer>
        <ControlContainer>
          <ThemeSwitcher
            checked={theme === "light"}
            onChange={toggleTheme}
            label={theme === "light" ? "Light" : "Dark"}
          />
        </ControlContainer>
        <TableContainer>
          <Table
            columns={columns}
            data={data}
            mode="multiple"
            onChange={(data) => {
              console.log("Selected data", data);
            }}
          />
        </TableContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
