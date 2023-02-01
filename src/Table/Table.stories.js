import React from "react";
import { storiesOf } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import Table from ".";

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

function Footer() {
  return (
    <div>
      <span>Hi this is footer</span>
    </div>
  );
}

function Header() {
  return (
    <div>
      <span>Hi this is header</span>
    </div>
  );
}

storiesOf("Table|Default", module)
  .addDecorator(jsxDecorator)
  .addParameters({
    info: {
      text: "Table documentation",
    },
  })
  .add("Basic Table", () => (
    <div style={{ margin: "30px" }}>
      <Table
        title="If YES, Choose Related Operator"
        columns={columns}
        dataRows={dataRows}
      />
    </div>
  ))
  .add("Single selection", () => (
    <div style={{ margin: "30px" }}>
      <Table
        title="If YES, Choose Related Operator"
        columns={columns}
        dataRows={dataRows}
        mode="single"
        onChange={(data) => {
          console.log("Row data", data);
        }}
      />
    </div>
  ))
  .add("Multiple selection", () => (
    <div style={{ margin: "30px" }}>
      <Table
        title="If YES, Choose Related Operator"
        columns={columns}
        dataRows={dataRows}
        mode="multiple"
        onChange={(data) => {
          console.log("Row data", data);
        }}
      />
    </div>
  ))
  .add("Limit rows", () => (
    <div style={{ margin: "30px" }}>
      <Table
        title="If YES, Choose Related Operator"
        columns={columns}
        dataRows={dataRows}
        maxRowsToDisplay={3}
        onChange={(data) => {
          console.log("Row data", data);
        }}
      />
    </div>
  ))
  .add("With footer", () => (
    <div style={{ margin: "30px" }}>
      <Table
        title="If YES, Choose Related Operator"
        columns={columns}
        dataRows={dataRows}
        footer={<Footer />}
      />
    </div>
  ))
  .add("With header", () => (
    <div style={{ margin: "30px" }}>
      <Table
        header={<Header />}
        columns={columns}
        dataRows={dataRows}
        footer={<Footer />}
      />
    </div>
  ))
  .add("Disable toggle", () => (
    <div style={{ margin: "30px" }}>
      <Table
        title="If YES, Choose Related Operator"
        columns={columns}
        dataRows={dataRows}
        mode="single"
        enableToggleMode={false}
        onChange={(data) => {
          console.log("Row data", data);
        }}
      />
    </div>
  ))
  .add("Compact view", () => (
    <div style={{ margin: "30px", width: "320px" }}>
      <Table title="Test header" columns={columns} dataRows={dataRows} />
    </div>
  ));
