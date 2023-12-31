import React from "react";
import * as S from "./Config.style";
import Header from "../common/header/Header";
import Form from "./form/create/Form";
import EditForm from "./form/edit/EditForm";
import { useRecoilValue } from "recoil";
import { purposeSelector } from "../../store/purposeAtome";

const Config = () => {
  const purpose = useRecoilValue(purposeSelector);
  return (
    <S.ConfigContainer>
      <Header desc="컨텐츠 설정" />
      {/* read 인지 create인지에 따라 Form 다르게 보여주기 */}
      {purpose === "create" && <Form />}
      {purpose === "read" && <EditForm />}
    </S.ConfigContainer>
  );
};

export default Config;
