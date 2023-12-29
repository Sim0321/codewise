import React from "react";
import * as S from "./AdminPage.style";
import List from "../components/contents-list/List";
const AdminPage = () => {
  return (
    <S.Page>
      <main>
        <List />
      </main>
    </S.Page>
  );
};

export default AdminPage;
