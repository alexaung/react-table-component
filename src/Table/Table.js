import React, { useState, useEffect } from "react";
import TableStyles from "./Table.scss";
import classNames from "classnames/bind";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const styles = classNames.bind(TableStyles);
const ROW_HEIGHT = 56;

function Table(props) {
  const {
    title,
    columns,
    dataRows,
    mode,
    maxRowsToDisplay,
    enableToggleMode = true,
    footer,
    header,
    onChange,
  } = props;
  const [maxHeight, setMaxHeight] = useState(getHeight(maxRowsToDisplay));

  function getHeight(maxRows = 5) {
    return ROW_HEIGHT * (maxRows + 1);
  }

  const [sort, setSort] = useState({
    column: null,
    direction: "desc",
  });

  useEffect(() => {
    setMaxHeight(getHeight(maxRowsToDisplay));
  }, [maxRowsToDisplay]);

  const handleSort = (column) => {
    let direction = "desc";
    if (sort.column === column && sort.direction === "desc") {
      direction = "asc";
    }
    setSort({ column, direction });
  };

  const sortedData = dataRows.sort((a, b) => {
    let result = 0;
    if (sort.column) {
      if (a[sort.column] < b[sort.column]) {
        result = sort.direction === "asc" ? -1 : 1;
      } else if (a[sort.column] > b[sort.column]) {
        result = sort.direction === "asc" ? 1 : -1;
      }
    }
    return result;
  });

  //console.table(sortedData);

  return (
    <div>
      {header ? header : null}
      {title && <div className={styles("table-title")}>{title}</div>}
      <div className={styles("table-wrapper")} style={{ maxHeight }}>
        <table className={styles("base-table")}>
          {Array.isArray(columns) && (
            <TableHeader
              columns={columns}
              mode={mode}
              sort={sort}
              onSort={handleSort}
            />
          )}
          {Array.isArray(sortedData) && (
            <TableBody
              columns={columns}
              dataRows={sortedData}
              mode={mode}
              onChange={onChange}
              enableToggleMode={Boolean(enableToggleMode)}
            />
          )}
        </table>
      </div>
      {footer ? footer : null}
    </div>
  );
}

export default Table;
