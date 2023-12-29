import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: block;
  width: 12px;
  height: 12px;
  border: 1px solid #cdd2ed;
  box-sizing: border-box;
  background-color: ${theme.backGround.white};

  border-radius: 2px;
  cursor: pointer;
  margin-right: 19px;
  position: relative;
  svg {
    width: 11px;
    height: 11px;
  }
`;
