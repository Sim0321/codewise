import React from "react";

import * as S from "./Table.style";
import TableHeader from "./header/TableHeader";
import TableList from "./list/TableList";
import TableBottom from "./bottom/TableBottom";
import useApi from "../../../hooks/useApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkListSelector } from "../../../store/checkAtom";

import { limitSelector, pageSelector } from "../../../store/request.js";

const Table = () => {
  // const [parentData, setParentData] = useState([]);
  const limit = useRecoilValue(limitSelector);
  const page = useRecoilValue(pageSelector);
  const { data, error, isLoading } = useApi("GET", {
    limit,
    page, // 이 부분 수정해야함
  });
  console.log("data ::", data);

  console.log(limit, page);

  const [checkList, setCheckList] = useRecoilState(checkListSelector);
  // console.log(checkList);

  // 체크박스 개별 선택/해제
  const checkSingle = (checked, id) => {
    if (checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택/해제
  const checkAll = (checked) => {
    if (checked) {
      const maeilUidArry = [];
      data.articles.forEach((el) => maeilUidArry.push(el.mailUid));
      setCheckList(maeilUidArry);
    } else {
      setCheckList([]);
    }
  };
  return (
    <S.Table>
      <TableHeader checkAll={checkAll} />
      <TableList
        data={data}
        error={error}
        isLoading={isLoading}
        checkSingle={checkSingle}
      />
      <TableBottom data={data} />
    </S.Table>
  );
};

export default Table;
