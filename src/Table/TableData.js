import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { generateKey } from "./../util/utils";

const COLUMN_COUNT = 3;

TableData.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sortable: PropTypes.bool,
    })
  ).isRequired,
  rowData: PropTypes.object.isRequired,
  mode: PropTypes.oneOf(["single", "multiple"]),
};

function TableData(props) {
  const { columns, rowData, mode } = props;
  const [isMobile, setIsMobile] = useState(false);

  const hideSortFunction = useCallback(() => {
    var columns = document.querySelectorAll("table th");
    const responsiveColumnCount =
      mode === "single" || mode === "multiple"
        ? COLUMN_COUNT + 1
        : COLUMN_COUNT;

    if (columns.length > responsiveColumnCount) {
      for (var i = 0; i < columns.length; i++) {
        columns[i].style.display = "none";
      }
    }
  }, [mode]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 640);
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);

    hideSortFunction();
    return () => window.removeEventListener("resize", handleResize);
  }, [hideSortFunction]);

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
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {Array.isArray(columns) &&
            columns.map((column, index) => (
              <p key={index} style={{ width: "100%" }}>
                {column.title}: {rowData[column.field]}
              </p>
            ))}
        </td>
      );
    } else {
      return columns.map((column, columnIndex) => (
        <td key={columnIndex} style={{ width: `${100 / columns.length}%` }}>
          {rowData[column.field]}
        </td>
      ));
    }
  } else {
    return columns.map((column, columnIndex) => (
      <td key={columnIndex}>{rowData[column.field]}</td>
    ));
  }
}

export default TableData;
