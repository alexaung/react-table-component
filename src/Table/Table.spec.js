import React from "react";
import Table from "./Table";
import { render, cleanup, fireEvent } from "@testing-library/react";
import data from "./../data/contract.json";

describe("<Table/>", () => {
  const columns = [
    { title: "Name", field: "name", sortable: true },
    { title: "Mobile", field: "mobile", sortable: true },
    { title: "Expiry", field: "expiry", sortable: true },
    { title: "Penalty", field: "penalty", sortable: true },
  ];

  afterEach(cleanup);

  it("Should render basic component", () => {
    const { container } = render(
      <Table columns={columns} data={data} mode="single" title="test title" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should invoke onChange callback", () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Table
        columns={columns}
        data={data}
        mode="single"
        title="test title"
        onChange={handleChange}
      />
    );
    /* The test will locate "Mavis Chen" in the table. If you alter your test data, kindly substitute it with an appropriate value. */
    fireEvent.click(getByText("Mavis Chen"));
    expect(handleChange).toHaveBeenCalled();
  });
});
