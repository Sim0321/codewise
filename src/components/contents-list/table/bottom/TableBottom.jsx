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
import { CSVLink } from "react-csv";
import { useQuery } from "react-query";
import { getContentsList } from "../../../../api/get";

const TableBottom = ({ data }) => {
  console.log(data);
  const [page, setPage] = useRecoilState(pageSelector);
  const [limit, setLimit] = useRecoilState(limitSelector);

  const setCheckList = useSetRecoilState(checkListSelector);

  const [open, setOpen] = useState(false);

  const selectArray = [1, 5, 10, 20];

  //
  // page+1
  const plusPage = () => {
    setPage(page + 1);
    setCheckList([]);
    console.log("눌림");
  };
  // page-1
  const minusPage = () => {
    setPage(page - 1);
    setCheckList([]);
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
  };

  const lastPage = () => {
    setPage(data.page.totalPage);
    setCheckList([]);
  };
  const firstPage = () => {
    setPage(1);
    setCheckList([]);
  };

  const renderSelectArray = () => {
    return selectArray.map((num, index) => (
      <SelectItem key={index} num={num} choseLimit={choseLimit} />
    ));
  };

  const { data: allContent } = useQuery(["contentList"], getContentsList);
  console.log("allContent::", allContent);

  const excelHeaders = [
    { label: "NO", key: "mailUid" },
    { label: "메일 유형", key: "mailType" },
    { label: "메일 발송 제목", key: "mailTitle" },
    { label: "메일 사용여부", key: "ismailIUse" },
    { label: "수정일", key: "modificationDate" },
  ];
  return (
    <S.TableBottomWrap>
      <div className="excel">
        {allContent && (
          <CSVLink
            data={allContent.articles}
            headers={excelHeaders}
            filename="컨텐츠목록.csv"
            className="hidden"
            target="_blank"
          >
            <Download />
            엑셀저장
          </CSVLink>
        )}
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
        <span>
          보기 - {limit}개 {data?.page.currentPage}/{data?.page.totalPage}
        </span>
      </div>
    </S.TableBottomWrap>
  );
};

export default TableBottom;
