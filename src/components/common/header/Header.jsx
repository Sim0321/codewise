import React from "react";
import { ReactComponent as ListIcon } from "../../../assets/icon/list.svg";
import { ReactComponent as Close } from "../../../assets/icon/close.svg";
import * as S from "./Header.style";

const Header = ({ desc }) => {
  return (
    <S.Header>
      <div className="title">
        {desc === "컨텐츠 목록" && <ListIcon />}
        <h3>{desc}</h3>
      </div>
      <Close className="close" />
    </S.Header>
  );
};

export default Header;
