import React from "react";
import Button from "./../../../common/button/Button";
import * as S from "./Top.style";
const Top = ({ total }) => {
  return (
    <S.Top>
      <div className="top--left">
        <div className="top--left--total">현재 등록 : {total}</div>
        <div className="top--left--desc">등록된 전체 메일 유형입니다.</div>
      </div>
      <div className="top--right">
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
    </S.Top>
  );
};

export default Top;
