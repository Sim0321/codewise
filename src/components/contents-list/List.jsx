import React, { useEffect } from "react";
import * as S from "./List.style";

import Table from "./table/Table";
import { useRecoilValue } from "recoil";
import { limitSelector, pageSelector } from "../../store/request";
import useApi from "../../hooks/useApi";
import Header from "./../common/header/Header";

const List = () => {
  const limit = useRecoilValue(limitSelector);
  const currentPage = useRecoilValue(pageSelector);
  const { data, error, isLoading, fetchData } = useApi();

  useEffect(() => {
    fetchData("GET", { limit, currentPage });
  }, [limit, currentPage]);

  return (
    <S.ListContainer>
      <Header desc="컨텐츠 목록" />
      <Table data={data} error={error} isLoading={isLoading} />
    </S.ListContainer>
  );
};

export default List;
