import React from "react";
import * as S from "./SelectItem.style";

const SelectItem = ({ num, choseLimit }) => {
  return <S.SelectItem onClick={choseLimit}>{num}</S.SelectItem>;
};

export default SelectItem;
