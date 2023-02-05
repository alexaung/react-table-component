import React from "react";
import { jsxDecorator } from "storybook-addon-jsx";
import Table from "../Table";
import data from "./../data/contract.json";
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
  { title: "Name", field: "name", sortable: true },
  { title: "Mobile", field: "mobile", sortable: true },
  { title: "Expiry", field: "expiry", sortable: true },
  { title: "Penalty", field: "penalty", sortable: true },
];

const Footer = ({ text }) => (
  <div>
    <span>{text}</span>
  </div>
);
const Header = ({ text }) => (
  <div>
    <span>{text}</span>
  </div>
);

export default {
  title: "Components/Table",
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
  decorators: [jsxDecorator],
};

export const BasicTable = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Table title="Operator List" columns={columns} data={data} />
    </div>
  );
};

export const SingleSelection = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Table
        title="Operator List"
        columns={columns}
        data={data}
        mode="single"
        onChange={(data) => {
          console.log("Row data", data);
        }}
      />
    </div>
  );
};

export const MultipleSelection = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Table
        title="Operator List"
        columns={columns}
        data={data}
        mode="multiple"
        onChange={(data) => {
          console.log("Row data", data);
        }}
      />
    </div>
  );
};

export const LimitRows = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Table
        title="Operator List"
        columns={columns}
        data={data}
        maxRowsToDisplay={3}
        onChange={(data) => {
          console.log("Row data", data);
        }}
      />
    </div>
  );
};

export const WithFooter = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Table
        title="Operator List"
        columns={columns}
        data={data}
        footer={
          <>
            <Footer text="My footer" />
          </>
        }
      />
    </div>
  );
};

export const WithHeader = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Table
        header={
          <>
            <Header text="My header" />
          </>
        }
        columns={columns}
        data={data}
        footer={
          <>
            <Footer text="My footer" />
          </>
        }
      />
    </div>
  );
};

export const DisableToggle = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Table
        title="Operator List"
        columns={columns}
        data={data}
        mode="single"
        enableToggleMode={false}
        onChange={(data) => {
          console.log("Row data", data);
        }}
      />
    </div>
  );
};

export const CompactView = () => {
  return (
    <div style={{ margin: "30px", width: "320px" }}>
      <Table title="Test header" columns={columns} data={data} />
    </div>
  );
};
