import styled from "styled-components";

const smwidth = "576px";
const mdwidth = "768px";
const xlwidth = "992px";

const TableWrapper = styled.div`
  @media screen and (min-width: ${xlwidth}) {
    overflow: auto;
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.tableBoxShadow};
  }

  @media screen and (min-width: ${mdwidth}) {
    overflow: auto;
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.tableBoxShadow};
  }

  @media screen and (max-width: ${smwidth}) {
    overflow: auto;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.tableBoxShadow};
  }
`;

const TableTitle = styled.h1`
  @media screen and (min-width: ${xlwidth}) {
    margin-bottom: 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
    line-height: 20px;
    letter-spacing: normal;
    font-weight: 600;
  }

  @media screen and (min-width: ${mdwidth}) {
    margin-bottom: 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
    line-height: 20px;
    letter-spacing: normal;
    font-weight: 600;
  }

  @media screen and (max-width: ${smwidth}) {
    margin-bottom: 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
    line-height: 20px;
    letter-spacing: normal;
    font-weight: 600;
  }
`;

const BaseTable = styled.table`
  @media screen and (min-width: ${xlwidth}) {
    display: table;
    width: 100%;
    border-collapse: collapse;
    line-height: 1.75;
    letter-spacing: 0;

    thead tr {
      background-color: ${({ theme }) => theme.tableHeaderColor};
      cursor: pointer;

      th {
        font-family: ${({ theme }) => theme.avenirHeavy};
        color: ${({ theme }) => theme.primary};
        font-size: 20px;
        text-align: left;
        letter-spacing: 0px;
        padding: 24px;
      }
    }

    tbody tr {
      &:not(:last-child) {
        border-bottom: 1px solid
          ${({ theme }) => theme.tableRowBorderBottomColor};
      }

      td {
        font-family: ${({ theme }) => theme.avenirBook};
        color: ${({ theme }) => theme.text};
        font-size: 20px;
        text-align: left;
        letter-spacing: 0.1px;
        padding: 24px;
      }
    }
  }

  @media screen and (min-width: ${mdwidth}) {
    display: table;
    width: 100%;
    border-collapse: collapse;
    line-height: 1.75;
    letter-spacing: 0;

    thead tr {
      background-color: ${({ theme }) => theme.tableHeaderColor};
      cursor: pointer;

      th {
        font-family: ${({ theme }) => theme.avenirHeavy};
        color: ${({ theme }) => theme.primary};
        font-size: 18px;
        text-align: left;
        letter-spacing: 0px;
        padding: 24px;
      }
    }

    tbody tr {
      &:not(:last-child) {
        border-bottom: 1px solid
          ${({ theme }) => theme.tableRowBorderBottomColor};
      }

      td {
        font-family: ${({ theme }) => theme.avenirBook};
        color: ${({ theme }) => theme.text};
        font-size: 18px;
        text-align: left;
        letter-spacing: 0.1px;
        padding: 24px;
      }
    }
  }

  @media screen and (max-width: ${smwidth}) {
    display: table;
    width: 100%;
    border-collapse: collapse;
    line-height: 1.75;
    letter-spacing: 0;

    thead tr {
      background-color: ${({ theme }) => theme.primary};
      cursor: pointer;

      th {
        font-family: ${({ theme }) => theme.avenirHeavy};
        color: ${({ theme }) => theme.text};
        font-size: 16px;
        text-align: left;
        letter-spacing: 0px;
        padding: 10px;
      }
    }

    tbody tr {
      &:not(:last-child) {
        margin-bottom: 8px;
        border-bottom: 1px solid
          ${({ theme }) => theme.tableRowBorderBottomColor};
      }

      td {
        font-family: ${({ theme }) => theme.avenirBook};
        color: ${({ theme }) => theme.text};
        font-size: 16px;
        text-align: left;
        letter-spacing: 0.1px;
        padding: 10px;
      }
    }
  }
`;

const TBody = styled.tbody`
  tr:hover {
    background-color: ${({ theme, enableTableHover }) =>
      enableTableHover === "enable-table-hover" ? theme.secondary : ""};
    cursor: pointer;
  }
`;

// const SelectedRowHighlight = styled.tr`
//   background-color: ${({ theme }) => theme.selectedRowColor};
// `;

const TableRow = styled.tr`
  background-color: ${({ theme, selected }) =>
    selected ? theme.selectedRowColor : ""};
`;

const Input = styled.input`
  cursor: pointer;
  padding: 10px;
  accent-color: ${({ theme }) => theme.inputColor};
  width: 24px;
  height: 24px;
`;

const TableHeaderCell = styled.div`
  color: ${({ theme, sortDirection }) =>
    sortDirection === "ascending" || sortDirection === "descending"
      ? theme.inputColor
      : ""};
  display: inline-flex;
  align-self: center;
  padding-left: 10px;
`;

export {
  TableWrapper,
  TableTitle,
  BaseTable,
  TBody,
  TableRow,
  Input,
  TableHeaderCell,
};
