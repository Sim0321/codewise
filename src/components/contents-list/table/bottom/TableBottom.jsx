import React, { startTransition, useState } from "react";
import * as S from "../Table.style";

import { ReactComponent as Download } from "../../../../assets/icon/download.svg";
import { ReactComponent as Left } from "../../../../assets/icon/leftArrow.svg";
import { ReactComponent as Right } from "../../../../assets/icon/rightArrow.svg";
import { ReactComponent as First } from "../../../../assets/icon/firstArrow.svg";
import { ReactComponent as Last } from "../../../../assets/icon/lastArrow.svg";
import { ReactComponent as Down } from "../../../../assets/icon/downArrow.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  limitSelector,
  pageSelector,
  requestSelector,
} from "../../../../store/request";

const TableBottom = ({ data }) => {
  const [page, setPage] = useRecoilState(pageSelector);
  const [limit, setLimit] = useRecoilState(limitSelector);

  const [open, setOpen] = useState(false);

  const plusPage = () => {
    setPage(page + 1);
  };
  const minusPage = () => {
    setPage(page - 1);
  };

  const openSelect = () => {
    setOpen(true);
  };

  const choseLimit = (e) => {
    setOpen(false);
    setLimit(e.target.innerHTML);
  };
  return (
    <S.TableBottomWrap>
      <div className="excel">
        <Download />
        엑셀저장
      </div>
      <div className="page">
        <div className="page-btn-container">
          <First />
          <Left onClick={minusPage} />
          <span>페이지</span>
          <div className="current">{data.page?.currentPage}</div>
          <p>/ {data.page?.totalPage}</p>
          <Right onClick={plusPage} />
          <Last />
        </div>
        <div className="page-size" onClick={openSelect}>
          <div className="page-size__select">{limit}</div>
          <Down />
          {open && (
            <ul className="select-box">
              <li onClick={choseLimit}>1</li>
              <li onClick={choseLimit}>5</li>
              <li onClick={choseLimit}>10</li>
              <li onClick={choseLimit}>20</li>
            </ul>
          )}
        </div>
      </div>
      <div className="page--meta">
        <span>보기 1 - 10/17</span>
      </div>
    </S.TableBottomWrap>
  );
};

export default TableBottom;
