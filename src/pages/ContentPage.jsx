import React from "react";
import * as S from "./ContentPage.style";
import List from "../components/contents-list/List";
import Config from "../components/contents-config/Config";
const AdminPage = () => {
  return (
    <S.Page>
      <main>
        <List />
        <Config />
      </main>
    </S.Page>
  );
};

export default AdminPage;
