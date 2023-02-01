import React from 'react';
import Table from './Table';
import { render, cleanup, fireEvent } from '@testing-library/react';

describe('<Table/>', () => {
  const headerLabels = [
    'Claim Number',
    'Date of Admission',
    'Date of Discharge',
    'Clinic/Hospital'
  ];
  const dataRows = [
    ['test-id', '12-03-2021', '26-03-2021', 'PARKWAY EAST'],
    ['CBGDC21000386-00', '13-03-2021', '25-03-2021', 'RESTRUCTURED HOSPITAL'],
    ['CBGDC21000386-00', '14-03-2021', '24-03-2021', 'PARKWAY EAST'],
    ['CBGDC21000386-00', '15-03-2021', '23-03-2021', 'SUNWAY'],
    ['CBGDC21000386-00', '16-03-2021', '22-03-2021', 'KEPPAL'],
    ['CBGDC21000386-00', '17-03-2021', '21-03-2021', 'PARKWAY EAST'],
    ['CBGDC21000386-00', '18-03-2021', '20-03-2021', 'PARKWAY EAST']
  ];
  afterEach(cleanup);

  it('Should render basic component', () => {
    const { container } = render(
      <Table
        headerLabels={headerLabels}
        dataRows={dataRows}
        mode="single"
        title="test title"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should invoke onChange callback', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Table
        headerLabels={headerLabels}
        dataRows={dataRows}
        mode="single"
        title="test title"
        onChange={onChange}
      />
    );
    fireEvent.click(getByText('test-id'));
    expect(onChange).toHaveBeenCalled();
  });
});
