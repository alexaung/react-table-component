import "./App.css";
import Table from "./Table/Table";
import useLocalStorage from "use-local-storage";
//import data from './data/operator.json'
import data from "./data/contract.json";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  // operator header

  // const columns = [
  //   {
  //     title: "Operator",
  //     field: "operator",
  //   },
  //   {
  //     title: "Headset Display",
  //     field: "headset_display",
  //   },
  //   {
  //     title: "3G Availability",
  //     field: "availability",
  //   },
  // ];

  const columns = [
    {
      title: "Name",
      field: "name",
      width: '10%',
      sortable: true
    },
    {
      title: "Mobile",
      field: "mobile",
      width: '50%',
      sortable: true
    },
    {
      title: "Expiry",
      field: "expiry",
      width: '20%',
      sortable: true
    },
    {
      title: "Penalty",
      field: "penalty",
      width: '20%',
      sortable: true
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
          margin: "10px",
        }}
      >
        <div style={{ margin: "50px" }}>
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
