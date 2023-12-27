import React from "react";
import * as S from "./List.style";
import { ReactComponent as ListIcon } from "../../assets/icon/list.svg";
import { ReactComponent as Close } from "../../assets/icon/close.svg";
import { ReactComponent as Download } from "../../assets/icon/download.svg";
import { ReactComponent as Left } from "../../assets/icon/leftArrow.svg";
import { ReactComponent as Right } from "../../assets/icon/rightArrow.svg";
import { ReactComponent as First } from "../../assets/icon/firstArrow.svg";
import { ReactComponent as Last } from "../../assets/icon/lastArrow.svg";
import { ReactComponent as Down } from "../../assets/icon/downArrow.svg";
import TableList from "./TableList";

const List = () => {
  return (
    <S.ListContainer>
      <div className="header">
        <div className="header__top">
          <div className="header__top--title">
            <ListIcon />
            <h3>컨텐츠 목록</h3>
          </div>
          <Close className="close" />
        </div>
        <div className="header__bottom">
          <div className="header__bottom--left">
            <div className="header__bottom--left--total">현재 등록 : 10</div>
            <div className="header__bottom--left--desc">
              등록된 전체 메일 유형입니다.
            </div>
          </div>
          <div className="header__bottom--right">
            <button>등록</button>
            <button>삭제</button>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="table-header">
          <div className="checkbox"></div>
          <div className="title table-number">NO</div>
          <div className="title table-type">메일 유형</div>
          <div className="title table-title">메일 발송 제목</div>
          <div className="title table-use">메일 사용여부</div>
          <div className="title table-date">수정일</div>
        </div>
        <div className="table-list">
          <TableList />
          <TableList />
          <TableList />
          <TableList />
          <TableList />
          <TableList />
          <TableList />
          <TableList />
          <TableList />
          <TableList />
        </div>
        <div className="table-bottom">
          <div className="table-bottom__excel">
            <Download />
            엑셀저장
          </div>
          <div className="table-bottom__page">
            <div className="table-bottom__page-btn-container">
              <First />
              <Left />
              <span>페이지</span>
              <div className="current">1</div>
              <p>/ 3</p>
              <Right />
              <Last />
            </div>
            <div className="table-bottom__page-size">
              <div className="table-bottom__page-size__select">10</div>
              <Down />
            </div>
          </div>
          <div className="table-bottom__page--meta">
            <span>보기 1 - 10/17</span>
          </div>
        </div>
      </div>
    </S.ListContainer>
  );
};

export default List;
