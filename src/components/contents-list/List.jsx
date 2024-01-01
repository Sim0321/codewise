import React from "react";
import * as S from "./List.style";

import Table from "./table/Table";
import { useRecoilValue } from "recoil";
import { requestSelector } from "../../store/request";
import Header from "./../common/header/Header";
import { useQuery } from "react-query";
import { getContentsListOption } from "../../api/get";

const List = () => {
  const request = useRecoilValue(requestSelector);
  console.log("request ::", request);

  const { data, isLoading, error } = useQuery(
    ["contentList", { request }],
    () => getContentsListOption(request)
  );

  return (
    <S.ListContainer>
      <Header desc="컨텐츠 목록" />
      <Table data={data} error={error} isLoading={isLoading} />
    </S.ListContainer>
  );
};

export default List;
