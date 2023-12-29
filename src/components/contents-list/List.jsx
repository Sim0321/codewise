import React, { useEffect } from "react";
import * as S from "./List.style";

import Header from "./header/Header";
import Table from "./table/Table";
import { useRecoilValue } from "recoil";
import { limitSelector, pageSelector } from "../../store/request";
import useApi from "../../hooks/useApi";

const List = () => {
  const limit = useRecoilValue(limitSelector);
  const currentPage = useRecoilValue(pageSelector);
  const { data, error, isLoading, fetchData } = useApi();

  useEffect(() => {
    fetchData("GET", { limit, currentPage });
  }, [limit, currentPage]);

  return (
    <S.ListContainer>
      <Header total={data.totalEl} />
      <Table data={data} error={error} isLoading={isLoading} />
    </S.ListContainer>
  );
};

export default List;
