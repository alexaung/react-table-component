import React from "react";
import PropTypes from "prop-types";
import { generateKey } from "./../util/utils";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  ArrowUpDown,
} from "./../assets/icons/svg_icons";

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sortable: PropTypes.bool,
    })
  ).isRequired,
  mode: PropTypes.oneOf(["single", "multiple"]),
  sort: PropTypes.shape({
    column: PropTypes.string,
    direction: PropTypes.string.isRequired,
  }).isRequired,
  onSort: PropTypes.func,
};

function TableHeader(props) {
  const { columns, mode, sort, onSort } = props;

  const handleClick = (column) => {
    if (column.sortable && column.field) {
      onSort(column.field);
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
              key={generateKey("th", column.field, index)}
              style={{
                width: column.width,
                flex: column.flex,
              }}
              onClick={() => handleClick(column)}
            >
              <div style={{ display: "flex" }}>
                <div>{column.title}</div>
                {column.sortable ? (
                  <div
                    className={
                      column.field === sort.column && sort.direction === "asc"
                        ? "ascending"
                        : column.field === sort.column &&
                          sort.direction === "desc"
                        ? "descending"
                        : "default"
                    }
                  >
                    {column.field === sort.column &&
                    sort.direction === "asc" ? (
                      <ArrowUpCircle />
                    ) : column.field === sort.column &&
                      sort.direction === "desc" ? (
                      <ArrowDownCircle />
                    ) : (
                      <ArrowUpDown />
                    )}
                  </div>
                ) : null}
              </div>
            </th>
          ))}
      </tr>
    </thead>
  );
}
export default TableHeader;
