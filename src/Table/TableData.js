import React, { useState, useEffect } from "react";
import { generateKey } from "./../util/utils";

function TableData(props) {
  const { headerLabels, rowData, index } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 700);
  }, []);

  if (isMobile) {
    return (
      <td key={generateKey("td", rowData.join(), index)}>
        {Array.isArray(rowData) &&
          rowData.map((columnData, index) => (
            <p key={index}>
              {headerLabels[index]}: {columnData}
            </p>
          ))}
      </td>
    );
  } else {
    return rowData.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>);
  }
}

export default TableData;
