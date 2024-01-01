import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: ${(p) => p.bg || "inherit"};
  border: ${(p) => p.border || "none"};
  border-radius: ${(p) => p.radius || "0px"};
  color: ${(p) => p.color || `${theme.color.black}`};
  &::placeholder {
    color: ${(p) => p.color || `${theme.color.gray}`};
  }
`;
