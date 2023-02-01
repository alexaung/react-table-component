import React, { useState, useEffect } from "react";
import { generateKey } from "./../util/utils";

function TableData(props) {
  const { columns, rowData } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 700);
  }, []);

  if (isMobile) {
    return (
      <td key={generateKey("td", Object.entries(rowData).map(entry => entry.join()).join())}>
        {Array.isArray(columns) &&
          columns.map((column, index) => (
            <p key={index}>
              {column.title}: {rowData[column.key]}
            </p>
          ))}
      </td>
    );
  } else {
    return columns.map((column, columnIndex) => <td key={columnIndex}>{rowData[column.key]}</td>);
  }
}

export default TableData;
