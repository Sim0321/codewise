import React from "react";
import * as S from "./List.style";

import Header from "./header/Header";
import Table from "./table/Table";

const List = () => {
  // const [limitValue, setLimitValue] = useRecoilState(limitAtom);
  // console.log(limitValue);

  // const { data, error, isLoading } = useApi("GET", {
  //   limit: 20,
  //   // mailType: "Notification",
  //   // mailTitle: "New Feature Announcement",
  //   currentPage: 1,
  //   // 예외처리 추가
  // });
  return (
    <S.ListContainer>
      <Header />
      <Table />
    </S.ListContainer>
  );
};

export default List;
