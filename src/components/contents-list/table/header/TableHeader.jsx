import React from "react";
import * as S from "../Table.style";

const TableHeader = () => {
  return (
    <S.TableHeaderWrap>
      <div className="checkbox" />
      <div className="title table-number">NO</div>
      <div className="title table-type">메일 유형</div>
      <div className="title table-title">메일 발송 제목</div>
      <div className="title table-use">메일 사용여부</div>
      <div className="title table-date">수정일</div>
    </S.TableHeaderWrap>
  );
};

export default TableHeader;
