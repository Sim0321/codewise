import React from "react";
import Editor from "./editor/Editor";
import * as S from "./Form.style";
import EmailForm from "../../../EmailForm";

const Form = () => {
  return (
    <S.FormContainer>
      <S.FlexBox className="label-flex" height="40px">
        <div className="type email-item">
          <label htmlFor="type">메일 유형</label>
          <div className="input-wrapper">
            <input type="text" id="type" />
          </div>
        </div>

        <div className="use email-item" height="40px">
          <label htmlFor="use">메일 사용여부</label>
          <div className="input-wrapper">
            <input type="text" id="use" />
          </div>
        </div>
      </S.FlexBox>

      <S.FlexBox className="label-flex" height="40px">
        <div className="title email-item">
          <label htmlFor="title">메일 발송제목</label>
          <div className="input-wrapper">
            <input type="text" id="title" />
          </div>
        </div>
      </S.FlexBox>

      <S.FlexBox className="editor-flex" height="350px">
        <div className="desc email-item">
          <label htmlFor="desc">메일 내용</label>
          <Editor />
        </div>
      </S.FlexBox>

      <S.FlexBox className="label-flex" height="40px">
        <div className="reason email-item">
          <label htmlFor="reason">변경사유</label>
          <div className="input-wrapper">
            <input type="text" id="reason" />
          </div>
        </div>
      </S.FlexBox>

      {/* <div className="mail-reason mail">
        <label htmlFor="">변경 사유</label>
        <input type="text" />
      </div> */}

      {/* <div className="preview">
        <button>미리보기</button>
      </div> */}

      {/* <div className="btn-container">
        <button>창닫기</button>
        <button>저장</button>
      </div> */}
    </S.FormContainer>
  );
};

export default Form;
