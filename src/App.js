import "./App.css";
import Table from "./Table/Table";
import useLocalStorage from "use-local-storage";
import data from "./data/operator.json";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const columns = [
    {
      title: "Operator",
      field: "operator",
    },
    {
      title: "Headset Display",
      field: "headset_display",
    },
    {
      title: "3G Availability",
      field: "availability",
    },
  ];

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
      <div
        style={{
          display: "block",
          alignItems: "center",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Table
            columns={columns}
            data={data}
            mode="multiple"
            onChange={(data) => {
              console.log("Selected data", data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
