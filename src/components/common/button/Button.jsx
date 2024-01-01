import React from "react";
import * as S from "./Button.style";
import { ReactComponent as SVG } from "../../../assets/icon/preview.svg";

const Button = ({ desc, size, bg, svg, ...rest }) => {
  return (
    <S.Button size={size} bg={bg} {...rest}>
      {svg && <SVG />}
      {desc}
    </S.Button>
  );
};

export default Button;
