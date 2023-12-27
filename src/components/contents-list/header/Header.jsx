import React from "react";

import { ReactComponent as ListIcon } from "../../../assets/icon/list.svg";
import { ReactComponent as Close } from "../../../assets/icon/close.svg";

import * as S from "./Header.style";
import Button from "./../../common/Button";

const Header = () => {
  return (
    <S.ListHeader>
      <div className="top">
        <div className="top--title">
          <ListIcon />
          <h3>컨텐츠 목록</h3>
        </div>
        <Close className="close" />
      </div>
      <div className="bottom">
        <div className="bottom--left">
          <div className="bottom--left--total">현재 등록 : 10</div>
          <div className="bottom--left--desc">등록된 전체 메일 유형입니다.</div>
        </div>
        <div className="bottom--right">
          <Button
            desc="등록"
            size="small"
            border="1px solid #CCD0E7"
            color="#191919"
          />
          <Button
            desc="삭제"
            size="small"
            border="1px solid #CCD0E7"
            color="#191919"
          />
        </div>
      </div>
    </S.ListHeader>
  );
};

export default Header;
