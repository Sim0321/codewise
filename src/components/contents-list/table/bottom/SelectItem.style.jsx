import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const SelectItem = styled.li`
  border-bottom: 1px solid ${theme.border.gray};
  padding: 2px 0;
  text-align: center;
  height: 20px;
  transition: all 0.3s ease-in-out;
  &:nth-last-child(1) {
    border-bottom: none;
  }
  &:hover {
    background-color: #e9eef4;
  }
`;
