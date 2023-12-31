import React, { useState } from "react";
import Editor from "../editor/Editor";
import * as S from "./Form.style";
// import EmailForm from "../../../EmailForm";
import Button from "../../../common/button/Button";
import { Input } from "../../../common/input/InputText.style";
import { useMutation, useQueryClient } from "react-query";
import { createContent } from "../../../../api/post";
import { useRecoilState } from "recoil";
import { purposeSelector } from "../../../../store/purposeAtome";

const Form = () => {
  const [purpose, setPurpose] = useRecoilState(purposeSelector);
  // console.log("purpose ::", purpose);

  const [editorValue, setEditorValue] = useState(`<h1>원격 접속 로그인 알림</h1>
  <p><span style="font-size: 14px;"><span style="background-color: rgb(149, 165, 166); color: rgb(255, 255, 255);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;제목&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>&nbsp; &nbsp; {{site_name}} 소명 요청 안내</span></p>
  <p><span style="font-size: 14px;"><span style="background-color: rgb(149, 165, 166); color: rgb(255, 255, 255);">&nbsp; &nbsp;탐지시나리오&nbsp; </span><span style="color: rgb(255, 255, 255);">&nbsp; &nbsp; </span><span style="color: rgb(0, 0, 0);">{{snm}}</span></span></p>
  <p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);"><span style="background-color: rgb(149, 165, 166); color: rgb(236, 240, 241);"><span style="color: rgb(255, 255, 255);">&nbsp; 시나리오오너&nbsp; &nbsp;</span></span>&nbsp; &nbsp; {{s_owner}} / {{s_owner_depx_nm}}</span></span></p>
  <p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);"><span style="color: rgb(255, 255, 255); background-color: rgb(149, 165, 166);">&nbsp; &nbsp; 탐지대상자&nbsp; &nbsp; </span>&nbsp; &nbsp; {{user_name}} / {{dept_name}}</span></span></p>
  <p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);"><span style="color: rgb(255, 255, 255); background-color: rgb(149, 165, 166);">&nbsp; &nbsp; &nbsp;탐지 시각&nbsp; &nbsp; &nbsp;</span>&nbsp; &nbsp; {{detect_run_time}}</span></span></p>
  `);

  const queryClient = useQueryClient();

  const handleQuillChange = (content, delta, source, editor) => {
    setEditorValue(editor.getContents());
  };

  const [postBody, setPostBody] = useState({
    mailType: "",
    mailTitle: "",
    ismailIUse: "Y",
    reason: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setPostBody({ ...postBody, [name]: value });
  };

  const handleRadio = (e) => {
    setPostBody({ ...postBody, ismailIUse: e.target.id });
  };

  const clickRedCircle = (status) => {
    setPostBody({ ...postBody, ismailIUse: status });
  };

  const { mutate: createPost } = useMutation(createContent, {
    onSuccess: (res) => {
      console.log("post 성공");
      setPostBody({
        mailType: "",
        mailTitle: "",
        ismailIUse: "Y",
        reason: "",
      });
      setEditorValue("");
      queryClient.invalidateQueries("contentList");
    },
  });

  const clickSubmit = (e) => {
    e.preventDefault();
    // 없을 때 예외처리
    if (
      postBody.mailType &&
      postBody.mailTitle &&
      editorValue &&
      postBody.reason
    ) {
      const stringEditorValue = JSON.stringify(editorValue);

      const newPostBody = { ...postBody, mailContent: stringEditorValue };

      createPost(newPostBody);
    } else {
      alert("빈칸을 다 채워주세요"); // 유효성 검사
    }
  };

  return (
    <S.FormContainer>
      <S.FlexBox className="label-flex" height="40px">
        <div className="type email-item">
          <label htmlFor="type">메일 유형</label>
          <div className="input-wrapper">
            <Input
              type="text"
              id="type"
              name="mailType"
              onChange={onChangeInput}
              value={postBody.mailType}
              placeholder="메일 유형"
            />
          </div>
        </div>

        <div className="use email-item" height="40px">
          <label>메일 사용여부</label>
          <div className="label-container">
            <div className="circle" onClick={() => clickRedCircle("Y")}>
              {postBody.ismailIUse === "Y" && <div className="red" />}
            </div>
            <input
              type="radio"
              id="Y"
              onChange={handleRadio}
              checked={postBody.ismailIUse === "Y"}
            />
            <label htmlFor="Y">사용</label>

            <div className="circle" onClick={() => clickRedCircle("N")}>
              {postBody.ismailIUse === "N" && <div className="red" />}
            </div>
            <input
              type="radio"
              id="N"
              onChange={handleRadio}
              checked={postBody.ismailIUse === "N"}
            />
            <label htmlFor="N">미사용</label>
          </div>
        </div>
      </S.FlexBox>

      <S.FlexBox className="label-flex" height="40px">
        <div className="title email-item">
          <label htmlFor="title">메일 발송제목</label>
          <div className="input-wrapper">
            <Input
              type="text"
              id="title"
              name="mailTitle"
              onChange={onChangeInput}
              value={postBody.mailTitle}
              placeholder="메일 발송제목"
              border="1px solid #CCD0E7"
              bg="#F2F4F7"
              radius="5px"
            />
          </div>
        </div>
      </S.FlexBox>

      <S.FlexBox className="editor-flex" height="350px">
        <div className="desc email-item">
          <label htmlFor="desc">메일 내용</label>
          <Editor
            handleQuillChange={handleQuillChange}
            editorValue={editorValue}
          />
        </div>
      </S.FlexBox>

      <S.FlexBox className="label-flex" height="40px">
        <div className="reason email-item">
          <label htmlFor="reason">변경사유</label>
          <div className="input-wrapper">
            <Input
              type="text"
              id="reason"
              name="reason"
              onChange={onChangeInput}
              value={postBody.reason}
              placeholder="argument 변경시 에러가 발생하오니 주의하시기 바랍니다."
              radius="5px"
              border="1px solid #CCD0E7"
              bg="#F2F4F7"
            />
          </div>
        </div>
      </S.FlexBox>

      <S.FlexBox height="40px" bg="#F2F4F7" pd="6px 5px">
        <Button
          desc="미리보기"
          size="long"
          bg="#fff"
          border="1px solid #B2B6C9"
          svg={true}
        />
      </S.FlexBox>

      <div className="btn-container">
        <Button desc="창닫기" size="big" border="1px solid #B2B6C9" />
        <Button
          desc="저장"
          size="big"
          bg="#191919"
          color="#fff"
          onClick={clickSubmit}
        />
      </div>
    </S.FormContainer>
  );
};

export default Form;
