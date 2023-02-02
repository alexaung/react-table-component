import React from "react";
import { jsxDecorator } from "storybook-addon-jsx";
import Table from "../Table";

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

export default {
  title: 'Components/Table',
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
      <Table
        title="If YES, Choose Related Operator"
        columns={columns}
        dataRows={dataRows}
      />
    </div>
  );
};

export const SingleSelection = () => {
  
  return (
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
  );
};

export const MultipleSelection = () => {
  
  return (
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
  );
};

export const LimitRows = () => {
  
  return (
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
  );
};

export const WithFooter = () => {
  
  return (
    <div style={{ margin: "30px" }}>
      <Table
        title="If YES, Choose Related Operator"
        columns={columns}
        dataRows={dataRows}
        footer={<Footer />}
      />
    </div>
  );
};

export const WithHeader = () => {
  
  return (
    <div style={{ margin: "30px" }}>
      <Table
        header={<Header />}
        columns={columns}
        dataRows={dataRows}
        footer={<Footer />}
      />
    </div>
  );
};

export const DisableToggle = () => {
  
  return (
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
  );
};

export const CompactView = () => {
  
  return (
    <div style={{ margin: "30px", width: "320px" }}>
      <Table title="Test header" columns={columns} dataRows={dataRows} />
    </div>
  );
};




