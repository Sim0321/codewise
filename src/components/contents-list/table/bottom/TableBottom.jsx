import React from "react";
import * as S from "../Table.style";

import { ReactComponent as Download } from "../../../../assets/icon/download.svg";
import { ReactComponent as Left } from "../../../../assets/icon/leftArrow.svg";
import { ReactComponent as Right } from "../../../../assets/icon/rightArrow.svg";
import { ReactComponent as First } from "../../../../assets/icon/firstArrow.svg";
import { ReactComponent as Last } from "../../../../assets/icon/lastArrow.svg";
import { ReactComponent as Down } from "../../../../assets/icon/downArrow.svg";

const TableBottom = () => {
  return (
    <S.TableBottomWrap>
      <div className="excel">
        <Download />
        엑셀저장
      </div>
      <div className="page">
        <div className="page-btn-container">
          <First />
          <Left />
          <span>페이지</span>
          <div className="current">1</div>
          <p>/ 3</p>
          <Right />
          <Last />
        </div>
        <div className="page-size">
          <div className="page-size__select">10</div>
          <Down />
        </div>
      </div>
      <div className="page--meta">
        <span>보기 1 - 10/17</span>
      </div>
    </S.TableBottomWrap>
  );
};

export default TableBottom;
