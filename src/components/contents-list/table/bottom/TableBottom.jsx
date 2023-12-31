import React, { useState } from "react";
import * as S from "./TableBottom.style";

import { ReactComponent as Download } from "../../../../assets/icon/download.svg";
import { ReactComponent as Left } from "../../../../assets/icon/leftArrow.svg";
import { ReactComponent as Right } from "../../../../assets/icon/rightArrow.svg";
import { ReactComponent as First } from "../../../../assets/icon/firstArrow.svg";
import { ReactComponent as Last } from "../../../../assets/icon/lastArrow.svg";
import { ReactComponent as Down } from "../../../../assets/icon/downArrow.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import { limitSelector, pageSelector } from "../../../../store/request";
import SelectItem from "./SelectItem";
import { checkListSelector } from "../../../../store/checkAtom";
import { useQueryClient } from "react-query";

const TableBottom = ({ data }) => {
  const [page, setPage] = useRecoilState(pageSelector);
  const [limit, setLimit] = useRecoilState(limitSelector);

  const setCheckList = useSetRecoilState(checkListSelector);

  const [open, setOpen] = useState(false);

  const selectArray = [1, 5, 10, 20];

  const queryClient = useQueryClient();

  //
  // page+1
  const plusPage = () => {
    setPage(page + 1);
    setCheckList([]);
    console.log("눌림");
    // queryClient.invalidateQueries("contentList");
  };
  // page-1
  const minusPage = () => {
    setPage(page - 1);
    setCheckList([]);
    // queryClient.invalidateQueries("contentList");
  };

  // selector open
  const openSelect = () => {
    setOpen(!open);
  };

  // limit 설정
  const choseLimit = (e) => {
    setOpen(!open);
    setLimit(e.target.innerHTML);
    setPage(1);
    setCheckList([]);

    // queryClient.invalidateQueries("contentList");
  };

  const lastPage = () => {
    setPage(data.page.totalPage);
    setCheckList([]);
    // queryClient.invalidateQueries("contentList");
  };
  const firstPage = () => {
    setPage(1);
    setCheckList([]);
    // queryClient.invalidateQueries("contentList");
  };

  const renderSelectArray = () => {
    return selectArray.map((num, index) => (
      <SelectItem key={index} num={num} choseLimit={choseLimit} />
    ));
  };
  return (
    <S.TableBottomWrap>
      <div className="excel">
        <Download />
        엑셀저장
      </div>
      <div className="page">
        <div className="page-btn-container">
          <First onClick={firstPage} />
          <Left onClick={minusPage} />
          <span>페이지</span>
          <div className="current">{data?.page.currentPage}</div>
          <p>/ {data?.page.totalPage}</p>
          <Right onClick={plusPage} />
          <Last onClick={lastPage} />
        </div>
        <div className="page-size" onClick={openSelect}>
          <div className="page-size__select">{limit}</div>
          <Down />
          {open && <ul className="select-box">{renderSelectArray()}</ul>}
        </div>
      </div>
      <div className="page--meta">
        <span>보기 1 - 10/17</span>
      </div>
    </S.TableBottomWrap>
  );
};

export default TableBottom;
