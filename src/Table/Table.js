import React, { useState, useEffect } from 'react';
import TableStyles from './Table.scss';
import classNames from 'classnames/bind';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const styles = classNames.bind(TableStyles);
const ROW_HEIGHT = 56;

function Table(props) {
  const {
    title,
    headerLabels,
    dataRows,
    mode,
    maxRowsToDisplay,
    enableToggleMode = true,
    footer,
    header,
    onChange
  } = props;
  const [maxHeight, setMaxHeight] = useState(getHeight(maxRowsToDisplay));

  function getHeight(maxRows = 5) {
    return ROW_HEIGHT * (maxRows + 1);
  }

  useEffect(() => {
    setMaxHeight(getHeight(maxRowsToDisplay));
  }, [maxRowsToDisplay]);

  return (
    <div>
      {header ? header : null}
      {title && <div className={styles('table-title')}>{title}</div>}
      <div className={styles('table-wrapper')} style={{ maxHeight }}>
        <table className={styles('base-table')}>
          {Array.isArray(headerLabels) && (
            <TableHeader headerLabels={headerLabels} mode={mode} />
          )}
          {Array.isArray(dataRows) && (
            <TableBody
              headerLabels={headerLabels}
              dataRows={dataRows}
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
