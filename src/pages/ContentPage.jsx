import React from "react";
import * as S from "./ContentPage.style";
import List from "../components/contents-list/List";
import Config from "../components/contents-config/Config";
import { useRecoilValue } from "recoil";
import { purposeSelector } from "../store/purposeAtome.js";
const AdminPage = () => {
  const purpose = useRecoilValue(purposeSelector);
  return (
    <S.Page>
      <main>
        <List />

        {purpose !== "default" && <Config />}
      </main>
    </S.Page>
  );
};

export default AdminPage;
