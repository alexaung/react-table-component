import React from "react";
import { generateKey } from "./../util/utils";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  ArrowUpDown,
} from "./../assets/icons/svg_icons";

function TableHeader(props) {
  const { columns, mode, sort, onSort } = props;

  const handleClick = (column) => {
    if (column.key) {
      onSort(column.key);
    }
  };

  return (
    <thead>
      <tr>
        {mode === "single" || mode === "multiple" ? <th></th> : null}

        {Array.isArray(columns) &&
          columns.map((column, index) => (
            <th
              scope="col"
              key={generateKey("th", column.key, index)}
              onClick={() => handleClick(column)}
            >
              <div style={{ display: "flex" }}>
                <div>{column.title}</div>
                <div
                  className={
                    column.key === sort.column && sort.direction === "asc"
                      ? "ascending"
                      : column.key === sort.column && sort.direction === "desc"
                      ? "descending"
                      : "default"
                  }
                >
                  {column.key === sort.column && sort.direction === "asc" ? (
                    <ArrowUpCircle />
                  ) : column.key === sort.column &&
                    sort.direction === "desc" ? (
                    <ArrowDownCircle />
                  ) : (
                    <ArrowUpDown />
                  )}
                </div>
              </div>
            </th>
          ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
