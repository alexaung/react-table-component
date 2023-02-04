import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { generateKey } from "./../util/utils";
import TableData from "./TableData";
import { TBody, TableRow, Input } from "./Table.styled";

const modes = ["SINGLE", "MULTIPLE"];

TableBody.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sortable: PropTypes.bool,
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
    <TBody enableTableHover={selectionMode}>
      {Array.isArray(data) &&
        data.map((rowData, index) => {
          const getKey = convertKeyData(rowData);
          const selected = selectedRowsKeys.includes(getKey);
          return (
            <TableRow
              key={getKey}
              onClick={() => handleClick(getKey, rowData)}
              selected={selected}
            >
              {updatedMode === "SINGLE" && (
                <td>
                  <Input
                    type="radio"
                    checked={selectedRowsKeys.includes(getKey)}
                    onChange={(e) => {}}
                  />
                </td>
              )}
              {updatedMode === "MULTIPLE" && (
                <td>
                  <Input
                    type="checkbox"
                    checked={selectedRowsKeys.includes(getKey)}
                    onChange={(e) => {}}
                  />
                </td>
              )}
              {<TableData columns={columns} rowData={rowData} mode={mode} />}
            </TableRow>
          );
        })}
    </TBody>
  );
}

export default TableBody;
