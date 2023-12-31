import React from "react";
import * as S from "./ModalPreview.style";
import Editor from "../../../contents-config/form/editor/Editor";

const ModalPreview = ({ data, editorValue }) => {
  // console.log(data);
  return (
    <S.ModalPreviewContainer>
      <S.FlexBox height="40px">
        <div className="type email-item">
          <label>메일 유형</label>
          <div className="text-wrapper">
            <div>{data.mailType}</div>
          </div>
        </div>

        <div className="use email-item" height="40px">
          <label>메일 사용여부</label>
          <div className="radio-container">
            <div className="circle">
              {data.ismailIUse === "Y" && <div className="red" />}
            </div>
            <span>사용</span>
            <div className="circle">
              {data.ismailIUse === "N" && <div className="red" />}
            </div>
            <span>미사용</span>
          </div>
        </div>
      </S.FlexBox>

      <S.FlexBox height="40px">
        <div className="title email-item">
          <label htmlFor="title">메일 발송제목</label>
          <div className="text-wrapper">
            <div className="value">{data.mailTitle}</div>
          </div>
        </div>
      </S.FlexBox>

      <S.FlexBox height="350px">
        <div className="desc email-item">
          <label htmlFor="desc">메일 내용</label>
          <Editor editorValue={editorValue} readOnly={true} />
        </div>
      </S.FlexBox>

      <S.FlexBox className="label-flex" height="40px">
        <div className="reason email-item">
          <label htmlFor="reason">변경사유</label>
          <div className="text-wrapper">
            <div className="value">{data.reason}</div>
          </div>
        </div>
      </S.FlexBox>
    </S.ModalPreviewContainer>
  );
};

export default ModalPreview;
