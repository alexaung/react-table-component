import * as React from 'react';

export interface TableProps {
  title?: string;
  columns?: string[];
  dataRows?: string[][];
  mode?: string;
  maxRowsToDisplay?: number;
  enableToggleMode?: boolean;
  header?: JSX.Element;
  footer?: JSX.Element;
  onChange?: (e: Event) => void;
  [key: string]: any;
}

interface TableState {}

declare class Table extends React.Component<TableProps, TableState> {
  render(): JSX.Element;
}

export default Table;
