import { css } from "styled-components";

export const theme = {
  color: {
    white: "#e5e7ee",
    black: "#353535",
    blue: "#7092c6",
  },
  border: {
    gray: "#CCD0E7",
  },
  font: {
    title: css`
      font-weight: 800;
      color: #111111;
      font-size: 3rem;
    `,
    subtitle: css`
      font-weight: 500;
      color: red;
    `,
  },
  backGround: {
    default: "#ffffff",
    mail: "#acb4b9",
    columHover: "#fffbd8",
    checked: "#ef3d66",
    total: "#ddebff",
    top: "#2e3e76",
  },
};
