import React, { useState, useEffect } from "react";
import { generateKey } from "./../util/utils";
import TableStyles from "./Table.scss";
import classNames from "classnames/bind";
import TableData from "./TableData";

const styles = classNames.bind(TableStyles);
const modes = ["SINGLE", "MULTIPLE"];

function TableBody(props) {
  const { headerLabels, dataRows, mode, onChange, enableToggleMode } = props;
  const [updatedMode, setUpdatedMode] = useState("NONE");
  const [selectionMode, setSelectionMode] = useState("");
  const [selectedRowsKeys, setSelectedRowsKeys] = useState([]);
  const [selectedRowsData, setSelectedRowsData] = useState([]);

  useEffect(() => {
    const updatedMode = mode ? `${mode}`.toUpperCase() : "NONE";
    setUpdatedMode(updatedMode);
    if (modes.includes(updatedMode)) {
      setSelectionMode("enable-table-hover");
    }
  }, [mode]);

  function getSingleSelection(key, rowData) {
    if (enableToggleMode && selectedRowsKeys.includes(key)) {
      setSelectedRowsKeys([]);
      return [];
    }
    setSelectedRowsKeys([key]);
    return rowData;
  }

  function getMultipleSelectionToggleData(key, rowData) {
    const data = selectedRowsData.filter(
      (selectedRowData) =>
        !selectedRowData.every((selectedData) => rowData.includes(selectedData))
    );
    setSelectedRowsData(data);
    setSelectedRowsKeys(
      selectedRowsKeys.filter(
        (selectedRowKey) => ![key].includes(selectedRowKey)
      )
    );
    return data;
  }

  function getMultipleSelectionData(key, rowData) {
    if (enableToggleMode && selectedRowsKeys.includes(key)) {
      return getMultipleSelectionToggleData(key, rowData);
    }

    if (!selectedRowsKeys.includes(key)) {
      const data = [...selectedRowsData, rowData];
      setSelectedRowsData(data);
      setSelectedRowsKeys([...selectedRowsKeys, key]);
      return data;
    }
    return [...selectedRowsData];
  }

  function handleClick(key, rowData) {
    if (onChange && modes.includes(updatedMode)) {
      let data;
      if (updatedMode === "MULTIPLE") {
        data = getMultipleSelectionData(key, rowData);
      } else {
        data = getSingleSelection(key, rowData);
      }
      onChange(data);
    }
  }

  return (
    <tbody className={styles(selectionMode)}>
      {Array.isArray(dataRows) &&
        dataRows.map((rowData, index) => {
          const getKey = generateKey("tr", rowData.join(), index);
          const rowSelectedCls = selectedRowsKeys.includes(getKey)
            ? "selected-row-highlight"
            : "";
          return (
            <tr
              key={getKey}
              onClick={() => handleClick(getKey, rowData)}
              className={styles(rowSelectedCls)}
            >
              {mode === "single" && (
                <td>
                  <input type="radio" className="input-selection" checked={selectedRowsKeys.includes(getKey)} onChange={e => {}}/>
                </td>
              )}
              {mode === "multiple" && (
                <td>
                  <input type="checkbox" className="input-selection" checked={selectedRowsKeys.includes(getKey)} onChange={e => {}}/>
                </td>
              )}
              {<TableData headerLabels={headerLabels} rowData={rowData} index={index} />}
            </tr>
          );
        })}
    </tbody>
  );
}

export default TableBody;
