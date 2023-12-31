import React, { useEffect, useState } from "react";
import Editor from "../editor/Editor";
import * as S from "./EditForm.style";
// import EmailForm from "../../../EmailForm";
import Button from "../../../common/button/Button";
import { Input } from "../../../common/input/InputText.style";
import useApi from "../../../../hooks/useApi";
import { useMutation, useQueryClient } from "react-query";
import { createContent } from "../../../../api/post";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  purposeSelector,
  readDetailSelector,
} from "../../../../store/purposeAtome";

const EditForm = () => {
  const contentData = useRecoilValue(readDetailSelector);

  // contentData로 할지 postData로 할지 정하기

  console.log("수정 ㅍ폼 ::", contentData);

  // const detail = useRecoilValue(readDetailSelector);
  // console.log(purpose);
  // console.log("detail::::", detail);

  // 등록한 것 라이브러리 사용한 것과, 아닌것 비교하기
  const queryClient = useQueryClient();

  const [postBody, setPostBody] = useState({
    mailType: contentData?.mailType,
    mailTitle: contentData?.mailType,
    ismailIUse: contentData?.ismailIUse,
    mailContent: "",
    reason: contentData?.reason,
  });
  console.log("수정 poseBody ::", postBody);

  useEffect(() => {
    const checkContent = contentData?.mailContent.split('"')[0] === "{";
    if (checkContent) {
      setEditorValue(JSON.parse(contentData?.mailContent));
    } else {
      setEditorValue(contentData?.mailContent);
    }

    // if(contentData){
    //   setPostBody({...postBody, })
    // }
  }, [contentData]);

  const [editorValue, setEditorValue] = useState("");

  const handleQuillChange = (content, delta, source, editor) => {
    setEditorValue(editor.getContents());
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log("sdfds");
    setPostBody({ ...postBody, [name]: value });
  };

  const handleRadio = (e) => {
    setPostBody({ ...postBody, ismailIUse: e.target.id });
  };

  const clickRedCircle = (status) => {
    setPostBody({ ...postBody, ismailIUse: status });
  };

  // const { fetchData } = useApi();

  // console.log("data :::::::::", data);

  const { mutate: createPost } = useMutation(createContent, {
    onSuccess: (res) => {
      console.log("post 성공");
      setPostBody({
        mailType: "",
        mailTitle: "",
        ismailIUse: "Y",
        mailContent: "",
        reason: "",
      });
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

    // fetchData("POST", newPostBody);
  };

  return (
    <S.EditFormContainer>
      <S.FlexBox className="label-flex" height="40px">
        <div className="type email-item">
          <label htmlFor="type">메일 유형</label>
          <div className="input-wrapper">
            <Input
              type="text"
              id="type"
              name="mailType"
              onChange={onChangeInput}
              value={contentData.mailType}
              placeholder="메일 유형"
            />
          </div>
        </div>

        <div className="use email-item" height="40px">
          <label>메일 사용여부</label>
          <div className="label-container">
            <div className="circle" onClick={() => clickRedCircle("Y")}>
              {contentData.ismailIUse === "Y" && <div className="red" />}
            </div>
            <input
              type="radio"
              id="Y"
              onChange={handleRadio}
              checked={contentData.ismailIUse === "Y"}
            />
            <label htmlFor="Y">사용</label>

            <div className="circle" onClick={() => clickRedCircle("N")}>
              {contentData.ismailIUse === "N" && <div className="red" />}
            </div>
            <input
              type="radio"
              id="N"
              onChange={handleRadio}
              checked={contentData.ismailIUse === "N"}
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
              value={contentData.mailTitle}
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
              value={contentData.reason}
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
    </S.EditFormContainer>
  );
};

export default EditForm;
