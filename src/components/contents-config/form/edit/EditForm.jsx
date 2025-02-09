import React, { useEffect, useState } from "react";
import Editor from "../editor/Editor";
import * as S from "./EditForm.style";
import Button from "../../../common/button/Button";
import { Input } from "../../../common/input/InputText.style";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { editContent } from "./../../../../api/put";
import { purposeSelector } from "../../../../store/purposeAtome";
import Modal from "../../../common/modal/Modal";
import ModalPreview from "../../../common/modal/children/ModalPreview";
import { readDetailSelector } from "../../../../store/contentDetailAtom";

const EditForm = () => {
  const queryClient = useQueryClient();

  const setPurpose = useSetRecoilState(purposeSelector);

  const [contentData, setContentData] = useRecoilState(readDetailSelector);
  const [modalOpen, setModalOpen] = useState(false);

  const [editorValue, setEditorValue] = useState("");

  const [validate, setValidate] = useState({});

  const { mutate: editPost } = useMutation(editContent, {
    onSuccess: () => {
      queryClient.invalidateQueries("contentList");
    },
  });

  // 등록한 것과 라이브러리 사용한것 비교하기
  useEffect(() => {
    const checkContent = contentData?.mailContent.split('"')[0] === "{";
    if (checkContent) {
      setEditorValue(JSON.parse(contentData?.mailContent));
    } else {
      setEditorValue(contentData?.mailContent);
    }
  }, [contentData]);

  const handleQuillChange = (content, delta, source, editor) => {
    setEditorValue(editor.getContents());
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setContentData({ ...contentData, [name]: value });
  };

  const handleRadio = (e) => {
    setContentData({ ...contentData, ismailIUse: e.target.id });
  };

  /** custom radio 누르면 바뀌는 함수 */
  const clickRedCircle = (status) => {
    setContentData({ ...contentData, ismailIUse: status });
  };

  /** 유효성 검사하는 함수 */
  const checkValidate = () => {
    let msg = {};

    if (contentData.mailType === "") {
      msg.mailType = "메일 타입을 입력해주세요.";
    }
    if (contentData.mailTitle === "") {
      msg.mailTitle = "메일 제목을 입력해주세요.";
    }
    if (contentData.reason === "") {
      msg.reason = "변경 사유를 입력해주세요.";
    }
    return msg;
  };

  /** 수정 */
  const clickSubmit = (e) => {
    e.preventDefault();
    const validateMsg = checkValidate();
    const validateMsgArray = Object.keys(validateMsg);
    if (validateMsgArray.length === 0) {
      const stringEditorValue = JSON.stringify(editorValue);

      const newPostBody = { ...contentData, mailContent: stringEditorValue };

      editPost(newPostBody);
      setPurpose("default");
    } else {
      setValidate(validateMsg);
    }
  };

  const clickClosePost = () => {
    setPurpose("default");
  };

  const openModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <S.EditFormContainer>
      <S.FlexBox height="40px">
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
      {validate.mailType && <div className="validate">{validate.mailType}</div>}

      <S.FlexBox height="40px">
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
      {validate.mailTitle && (
        <div className="validate">{validate.mailTitle}</div>
      )}

      <S.FlexBox height="350px">
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
      {validate.reason && <div className="validate">{validate.reason}</div>}

      <S.FlexBox height="40px" bg="#F2F4F7" pd="6px 5px">
        <Button
          desc="미리보기"
          size="long"
          bg="#fff"
          border="1px solid #B2B6C9"
          svg={true}
          onClick={openModal}
        />
      </S.FlexBox>

      <div className="btn-container">
        <Button
          desc="취소"
          size="big"
          border="1px solid #B2B6C9"
          onClick={clickClosePost}
        />
        <Button
          desc="수정 완료"
          size="big"
          bg="#191919"
          color="#fff"
          onClick={clickSubmit}
        />
      </div>

      {modalOpen && (
        <Modal setModalOpen={setModalOpen} roll="preview">
          <ModalPreview data={contentData} editorValue={editorValue} />
        </Modal>
      )}
    </S.EditFormContainer>
  );
};

export default EditForm;
