import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { generateKey } from "./../util/utils";

TableData.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
    })
  ).isRequired,
  rowData: PropTypes.object.isRequired,
};

function TableData(props) {
  const { columns, rowData } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 700);
  }, [isMobile]);

  if (isMobile) {
    if (columns.length > 3) {
      return (
        <td
          key={generateKey(
            "td",
            Object.entries(rowData)
              .map((entry) => entry.join())
              .join()
          )}
        >
          {Array.isArray(columns) &&
            columns.map((column, index) => (
              <p key={index}>
                {column.title}: {rowData[column.field]}
              </p>
            ))}
        </td>
      );
    } else {
      return columns.map((column, columnIndex) => (
        <td key={columnIndex}>{rowData[column.field]}</td>
      ));
    }
  } else {
    return columns.map((column, columnIndex) => (
      <td key={columnIndex}>{rowData[column.field]}</td>
    ));
  }
}

export default TableData;
