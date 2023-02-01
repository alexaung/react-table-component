import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Table from '.';

const headerLabels = [
  'Claim Number',
  'Date of Admission',
  'Date of Discharge',
  'Clinic/Hospital'
];
const dataRows = [
  ['CBGDC21000386-00', '12-03-2021', '26-03-2021', 'PARKWAY EAST'],
  ['CBGDC21000386-00', '13-03-2021', '25-03-2021', 'RESTRUCTURED HOSPITAL'],
  ['CBGDC21000386-00', '14-03-2021', '24-03-2021', 'PARKWAY EAST'],
  ['CBGDC21000386-00', '15-03-2021', '23-03-2021', 'SUNWAY'],
  ['CBGDC21000386-00', '16-03-2021', '22-03-2021', 'KEPPAL'],
  ['CBGDC21000386-00', '17-03-2021', '21-03-2021', 'PARKWAY EAST'],
  ['CBGDC21000386-00', '18-03-2021', '20-03-2021', 'PARKWAY EAST']
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

storiesOf('Table|Default', module)
  .addDecorator(jsxDecorator)
  .addParameters({
    info: {
      text: 'Table documentation'
    }
  })
  .add('Basic Table', () => (
    <div style={{ margin: '30px' }}>
      <Table
        title="If YES, Choose Related Hospitalisation/ Day Surgery Claims"
        headerLabels={headerLabels}
        dataRows={dataRows}
      />
    </div>
  ))
  .add('Single selection', () => (
    <div style={{ margin: '30px' }}>
      <Table
        title="If YES, Choose Related Hospitalisation/ Day Surgery Claims"
        headerLabels={headerLabels}
        dataRows={dataRows}
        mode="single"
        onChange={data => {
          console.log('Row data', data);
        }}
      />
    </div>
  ))
  .add('Multiple selection', () => (
    <div style={{ margin: '30px' }}>
      <Table
        title="If YES, Choose Related Hospitalisation/ Day Surgery Claims"
        headerLabels={headerLabels}
        dataRows={dataRows}
        mode="multiple"
        onChange={data => {
          console.log('Row data', data);
        }}
      />
    </div>
  ))
  .add('Limit rows', () => (
    <div style={{ margin: '30px' }}>
      <Table
        title="If YES, Choose Related Hospitalisation/ Day Surgery Claims"
        headerLabels={headerLabels}
        dataRows={dataRows}
        maxRowsToDisplay={3}
        onChange={data => {
          console.log('Row data', data);
        }}
      />
    </div>
  ))
  .add('With footer', () => (
    <div style={{ margin: '30px' }}>
      <Table
        title="If YES, Choose Related Hospitalisation/ Day Surgery Claims"
        headerLabels={headerLabels}
        dataRows={dataRows}
        footer={<Footer />}
      />
    </div>
  ))
  .add('With header', () => (
    <div style={{ margin: '30px' }}>
      <Table
        header={<Header />}
        headerLabels={headerLabels}
        dataRows={dataRows}
        footer={<Footer />}
      />
    </div>
  ))
  .add('Disable toggle', () => (
    <div style={{ margin: '30px' }}>
      <Table
        title="If YES, Choose Related Hospitalisation/ Day Surgery Claims"
        headerLabels={headerLabels}
        dataRows={dataRows}
        mode="single"
        enableToggleMode={false}
        onChange={data => {
          console.log('Row data', data);
        }}
      />
    </div>
  ))
  .add('Compact view', () => (
    <div style={{ margin: '30px', width: '320px' }}>
      <Table
        title="Test header"
        headerLabels={headerLabels}
        dataRows={dataRows}
      />
    </div>
  ));
