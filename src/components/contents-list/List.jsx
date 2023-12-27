import React from "react";
import * as S from "./List.style";

import Header from "./header/Header";
import Table from "./table/Table";
import useApi from "./../../hooks/useApi";

const List = () => {
  const option = { limit: 5, currentPage: 10 };
  // const { data, error, isLoading } = useApi("GET");
  const { data, error, isLoading } = useApi("GET", {
    limit: 5,
    // mailType: "Notification",
    // mailTitle: "New Feature Announcement",
    currentPage: 10,
  });
  console.log("페이지 조회 :", data);
  const { data: testData } = useApi("GET");
  console.log("전체조회 -----", testData);
  return (
    <S.ListContainer>
      <Header />
      <Table />
    </S.ListContainer>
  );
};

export default List;
