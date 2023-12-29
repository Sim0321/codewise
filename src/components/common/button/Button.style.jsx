import styled from "styled-components";
import { theme } from "../../../styles/theme";

const sizes = {
  small: {
    width: "60px",
    height: "26px",
    borderRadius: "5px",
  },
  long: {
    width: "100px",
    height: "26px",
    borderRadius: "5px",
  },
  big: {
    width: "130px",
    height: "34px",
  },
  default: {
    width: "50px",
    height: "30px",
    borderRadius: "0px",
  },
};

export const Button = styled.button`
  width: ${(p) => sizes[p.size || "default"].width};
  height: ${(p) => sizes[p.size || "default"].height};
  border-radius: ${(p) => sizes[p.size || "default"].borderRadius};
  background-color: ${(p) => p.bg || "#fff"};
  border: ${(p) => (p.border ? `1px solid ${theme.border.gray}` : `none`)};
  color: ${(p) => p.color || `${theme.color.black}`};
`;
