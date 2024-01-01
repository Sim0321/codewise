import React, { useState } from "react";
import * as S from "./TableBottom.style";

import { ReactComponent as Download } from "../../../../assets/icon/download.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import { requestSelector } from "../../../../store/request";
import SelectItem from "./SelectItem";
import { checkListSelector } from "../../../../store/checkAtom";
import { CSVLink } from "react-csv";
import { useQuery } from "react-query";
import { getContentsList } from "../../../../api/get";

import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import usePagination from "../../../../hooks/usePagination";
import { purposeSelector } from "../../../../store/purposeAtome";

const TableBottom = ({ data }) => {
  const [request, setRequest] = useRecoilState(requestSelector);
  const [open, setOpen] = useState(false);

  const setCheckList = useSetRecoilState(checkListSelector);

  const setPurpose = useSetRecoilState(purposeSelector);

  const selectArray = [1, 5, 10, 20];

  const { plusPage, minusPage, lastPage, firstPage } = usePagination(data);

  const excelHeaders = [
    { label: "NO", key: "mailUid" },
    { label: "메일 유형", key: "mailType" },
    { label: "메일 발송 제목", key: "mailTitle" },
    { label: "메일 사용여부", key: "ismailIUse" },
    { label: "수정일", key: "modificationDate" },
  ];

  /** selector toggle 함수 */
  const openSelect = () => {
    setOpen(!open);
  };

  /** limit 설정 함수 */
  const choseLimit = (e) => {
    setOpen(!open);
    setRequest({
      ...request,
      limit: parseInt(e.target.innerHTML),
      currentPage: 1,
    });
    setCheckList([]);
    setPurpose("default");
  };

  /** selector 옵션들 렌더해주는 함수 */
  const renderSelectArray = () => {
    return selectArray.map((num, index) => (
      <SelectItem key={index} num={num} choseLimit={choseLimit} />
    ));
  };

  const { data: allContent } = useQuery(
    ["allContentList", { data }],
    getContentsList
  );

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
          <FiChevronsLeft onClick={firstPage} />
          <FiChevronLeft onClick={minusPage} />

          <span>페이지</span>
          <div className="current">
            {data?.page.totalPage === 0 ? "0" : request.currentPage}
          </div>
          <p>/ {data?.page.totalPage}</p>

          <FiChevronRight onClick={plusPage} />
          <FiChevronsRight onClick={lastPage} />
        </div>
        <div className="page-size" onClick={openSelect}>
          <div className="page-size__select">{request.limit}</div>
          {open ? <FiChevronUp /> : <FiChevronDown />}
          {open && <ul className="select-box">{renderSelectArray()}</ul>}
        </div>
      </div>
      <div className="page--meta">
        <span>
          보기 - {request.limit}개 {data?.page.currentPage}/
          {data?.page.totalPage}
        </span>
      </div>
    </S.TableBottomWrap>
  );
};

export default TableBottom;
