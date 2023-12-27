import React from "react";
import * as S from "./List.style";

import Header from "./header/Header";
import Table from "./table/Table";

const List = () => {
  return (
    <S.ListContainer>
      <Header />
      <Table />
    </S.ListContainer>
  );
};

export default List;
