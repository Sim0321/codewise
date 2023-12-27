import { css } from "styled-components";

export const theme = {
  color: {
    white: "#ffffff",
    black: "#191919",
    blue: "#5E8EC7",
  },
  border: {
    gray: "#CCD0E7",
    black: "#191919",
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
    default: "#CDD0E5",
    white: "#ffffff",
    mail: "#acb4b9",
    columHover: "#e9eef4",
    columChecked: "#fffbd8",
    checked: "#ef3d66",
    total: "#ddebff",
    top: "#2e3e76",
    bottom: "#D9DAE3",
  },
};
