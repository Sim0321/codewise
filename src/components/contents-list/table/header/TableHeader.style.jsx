import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const TableHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${theme.border.black};
  border-bottom: 1px solid ${theme.border.black};
  width: 100%;
  height: 30px;
  padding-left: 38px;

  .title {
    text-align: center;
    border-left: 1px solid ${theme.border.black};
    width: 100%;

    font-weight: 500;
  }
`;
