import React from "react";

import * as S from "./Table.style";
import TableHeader from "./header/TableHeader";
import TableList from "./list/TableList";
import TableBottom from "./bottom/TableBottom";
import { useRecoilState } from "recoil";
import { checkListSelector } from "../../../store/checkAtom";
import Top from "./top/Top";

const Table = ({ data, error, isLoading }) => {
  const [checkList, setCheckList] = useRecoilState(checkListSelector);

  /** 체크박스 개별 선택/해제 */
  const checkSingle = (checked, id) => {
    if (checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter((el) => el !== id));
    }
  };

  /** 체크박스 전체 선택/해제 */
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
      <Top total={data?.totalEl} />
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
