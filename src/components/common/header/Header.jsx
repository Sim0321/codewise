import React from "react";
import { ReactComponent as ListIcon } from "../../../assets/icon/list.svg";
import { ReactComponent as Close } from "../../../assets/icon/close.svg";
import * as S from "./Header.style";
import { useSetRecoilState } from "recoil";
import { purposeSelector } from "../../../store/purposeAtome";

const Header = ({ desc }) => {
  const setPurpose = useSetRecoilState(purposeSelector);

  /** size 최소화 시키는 함수 */
  const clickSmall = () => {
    setPurpose("default");
  };

  return (
    <S.Header>
      <div className="title">
        {desc === "컨텐츠 목록" && <ListIcon />}
        <h3>{desc}</h3>
      </div>
      {desc === "컨텐츠 설정" && (
        <Close className="close" onClick={clickSmall} />
      )}
    </S.Header>
  );
};

export default Header;
