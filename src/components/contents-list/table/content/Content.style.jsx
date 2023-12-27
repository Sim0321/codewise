import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Content = styled.li`
  padding-left: 38px;
  width: 100%;
  border-bottom: 1px solid ${theme.border.gray};
  background-color: ${theme.backGround.white};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  height: 30px;
  .detail {
    width: 100%;
    text-align: center;
  }
  .text-left {
    padding-left: 28px;
    text-align: left;
  }
  &:hover {
    background-color: ${theme.backGround.columHover};
  }
`;
