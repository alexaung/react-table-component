import "./App.css";
import Table from "./Table/Table";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const columns = [
    {
      title: "Operator",
      dataIndex: "operator",
      key: "operator",
    },
    {
      title: "Headset Display",
      dataIndex: "headset_display",
      key: "headset_display",
    },
    {
      title: "3G Availability",
      dataIndex: "3g_availability",
      key: "availability",
    },
  ];

  const dataRows = [
    {
      id: 1,
      operator: "*Celcom Axiata (LTE)",
      headset_display: "CELCOM / My Celcom / 502 19",
      availability: "Yes",
    },
    {
      id: 2,
      operator: "*DiGi Telecom (LTE)",
      headset_display: "DiGi 1800 / DiGi / MYMY18",
      availability: "Yes",
    },
    {
      id: 3,
      operator: "Maxis (LTE)",
      headset_display: "U Mobile / MYS 18 / MY 18",
      availability: "Yes",
    },
    {
      id: 4,
      operator: "U Mobile (LTE)",
      headset_display: "U Mobile / MYS 18 / MY 18",
      availability: "Yes",
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
            //title="Operator List"

            columns={columns}
            dataRows={dataRows}
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
