import styled from "styled-components";

const AppContainer = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.background};
  font-size: large;
  font-weight: bold;
  padding: 20px;
  height: calc(100vh - 40px);
  transition: all 0.5s;
`;

const Button = styled.button`
  font-size: 1em;

  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(theme) => theme.textPrimary};
  border: 2px solid ${(theme) => theme.textPrimary};

  float: right;
  /*transition: all 0.5s;*/
  cursor: pointer;
`;

export { AppContainer, Button };
