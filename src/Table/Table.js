import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableStyles from "./Table.scss";
import classNames from "classnames/bind";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const styles = classNames.bind(TableStyles);
const ROW_HEIGHT = 100;

Table.propTypes = {
  /** The title of the table, displayed at the top of the component. */
  title: PropTypes.string,
  /** An array of objects, each representing a column in the table. Each object must contain a title property,
   * which is used to display the header for the column, and a field property, which is used to retrieve the data for the column from the data objects. */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      width: PropTypes.string,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  /** An array of data objects that are displayed in the table body. */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Specifies the selection mode of the table. Can be either single or multiple. */
  mode: PropTypes.oneOf(["single", "multiple"]),
  /** The maximum number of rows to display in the table body. If the number of rows exceeds this value, a scrollbar will be displayed to allow users to access the additional rows. */
  maxRowsToDisplay: PropTypes.number,
  /** A boolean that determines whether the selection mode of the table can be changed by the user. */
  enableToggleMode: PropTypes.bool,
  /** A string or component to display at the bottom of the table. */
  footer: PropTypes.string,
  /** A string or component to display at the top of the table. */
  header: PropTypes.string,
  /** A callback function that is triggered when the selected rows in the table are changed. */
  onChange: PropTypes.func,
};

Table.defaultProps = {
  title: "",
  columns: [
    {
      sortable: false,
    },
  ],
  maxRowsToDisplay: 10,
  enableToggleMode: true,
  footer: "",
  header: "",
  onChange: null,
  
};

function Table(props) {
  const {
    title,
    columns,
    data,
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

  const sortedData = data.sort((a, b) => {
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
              data={sortedData}
              mode={mode}
              enableToggleMode={Boolean(enableToggleMode)}
              onChange={onChange}
            />
          )}
        </table>
      </div>
      {footer ? footer : null}
    </div>
  );
}

export default Table;
