import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { generateKey } from "./../util/utils";
import TableStyles from "./Table.scss";
import classNames from "classnames/bind";
import TableData from "./TableData";

const styles = classNames.bind(TableStyles);
const modes = ["SINGLE", "MULTIPLE"];

TableBody.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  mode: PropTypes.oneOf(["single", "multiple"]),
  enableToggleMode: PropTypes.bool,
  onChange: PropTypes.func,
};

function TableBody(props) {
  const { columns, data, mode, enableToggleMode, onChange } = props;
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

  function convertKeyData(rowData) {
    const keyData = Object.entries(rowData)
      .map((entry) => entry.join())
      .join();
    const getKey = generateKey(keyData);
    return getKey;
  }

  function getMultipleSelectionToggleData(key, rowData) {
    const data = selectedRowsData.filter(
      (selectedRowsData) => convertKeyData(selectedRowsData) !== key
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
    let data;
    if (enableToggleMode && selectedRowsKeys.includes(key)) {
      return getMultipleSelectionToggleData(key, rowData);
    }

    if (!selectedRowsKeys.includes(key)) {
      data = [...selectedRowsData, rowData];
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
      {Array.isArray(data) &&
        data.map((rowData, index) => {
          const getKey = convertKeyData(rowData);
          const rowSelectedCls = selectedRowsKeys.includes(getKey)
            ? "selected-row-highlight"
            : "";
          return (
            <tr
              key={getKey}
              onClick={() => handleClick(getKey, rowData)}
              className={styles(rowSelectedCls)}
            >
              {updatedMode === "SINGLE" && (
                <td>
                  <input
                    type="radio"
                    className="input-selection"
                    checked={selectedRowsKeys.includes(getKey)}
                    onChange={(e) => {}}
                  />
                </td>
              )}
              {updatedMode === "MULTIPLE" && (
                <td>
                  <input
                    type="checkbox"
                    className="input-selection"
                    checked={selectedRowsKeys.includes(getKey)}
                    onChange={(e) => {}}
                  />
                </td>
              )}
              {<TableData columns={columns} rowData={rowData} />}
            </tr>
          );
        })}
    </tbody>
  );
}

export default TableBody;
