import React from "react";
import * as S from "./Button.style";

const Button = ({ desc, size, bg, ...rest }) => {
  return (
    <S.Button size={size} bgColor={bg} {...rest}>
      {desc}
    </S.Button>
  );
};

export default Button;
