import React from "react";

import * as S from "./Table.style";
import TableHeader from "./header/TableHeader";
import TableList from "./list/TableList";
import TableBottom from "./bottom/TableBottom";

const Table = () => {
  return (
    <S.Table>
      <TableHeader />
      <TableList />
      <TableBottom />
    </S.Table>
  );
};

export default Table;
