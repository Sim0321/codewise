import React from "react";
import * as S from "./Content.style";

const Content = () => {
  return (
    <S.Content>
      <div className="checkbox"></div>
      <div className="table-number detail">1</div>
      <div className="table-type detail ">공통-로그분석재요청</div>
      <div className="table-title detail text-left">로그분석 재요청</div>
      <div className="table-use detail">사용</div>
      <div className="table-date detail">2021-05-14 13:24</div>
    </S.Content>
  );
};

export default Content;
