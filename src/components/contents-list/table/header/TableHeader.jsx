import React from "react";
import * as S from "./TableHeader.style";
import { useRecoilValue } from "recoil";

import { requestSelector } from "../../../../store/request";
import { checkListSelector } from "../../../../store/checkAtom";
import CheckBox from "../../../common/checkbox/CheckBox";

const TableHeader = ({ checkAll }) => {
  const checkList = useRecoilValue(checkListSelector);

  const request = useRecoilValue(requestSelector);

  return (
    <S.TableHeaderWrap>
      <CheckBox
        checked={checkList.length === Number(request.limit)}
        onChange={checkAll}
      />
      <div className="title table-number">NO</div>
      <div className="title table-type">메일 유형</div>
      <div className="title table-title">메일 발송 제목</div>
      <div className="title table-use">메일 사용여부</div>
      <div className="title table-date">수정일</div>
    </S.TableHeaderWrap>
  );
};

export default TableHeader;
