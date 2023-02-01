import "./App.css";
import Table from "./Table/Table";

function App() {
  const headerLabels = [
    "Operator",
    "Headset Display",
    "3G Availability",
  ];
  const dataRows = [
    ["*Celcom Axiata (LTE)", "CELCOM / My Celcom / 502 19", "Yes"],
    ["*DiGi Telecom (LTE)", "DiGi 1800 / DiGi / MYMY18", "Yes"],
    ["Maxis (LTE)", "U Mobile / MYS 18 / MY 18", "Yes"],
    ["U Mobile (LTE)", "U Mobile / MYS 18 / MY 18", "Yes"],
  ];

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin:"10px",
        }}
      >
        <Table
          //title="Operator List"
          
          headerLabels={headerLabels}
          dataRows={dataRows}
          mode="multiple"
          onChange={(data) => {
            console.log("Row data", data);
          }}
        />
      </div>
    </div>
  );
}

export default App;
