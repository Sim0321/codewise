import React from "react";
import * as S from "./List.style";

import Table from "./table/Table";
import { useRecoilValue } from "recoil";
import { limitSelector, pageSelector } from "../../store/request";
import Header from "./../common/header/Header";
import { useQuery } from "react-query";
import { getContentsListOption } from "../../api/get";

const List = () => {
  const limit = useRecoilValue(limitSelector);
  const currentPage = useRecoilValue(pageSelector);

  const { data, isLoading, error } = useQuery(
    ["contentList", { limit, currentPage }],
    () => getContentsListOption({ limit, currentPage })
  );

  return (
    <S.ListContainer>
      <Header desc="컨텐츠 목록" />
      <Table data={data} error={error} isLoading={isLoading} />
    </S.ListContainer>
  );
};

export default List;
