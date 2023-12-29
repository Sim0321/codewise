import React from "react";
import * as S from "./Config.style";
import Form from "./form/Form";
import Header from "../common/header/Header";
import EmailForm from "../../EmailForm";

const Config = () => {
  return (
    <S.ConfigContainer>
      <Header desc="컨텐츠 설정" />
      <Form />
      <EmailForm />
    </S.ConfigContainer>
  );
};

export default Config;
