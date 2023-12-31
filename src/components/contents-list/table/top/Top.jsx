import React from "react";
import Button from "./../../../common/button/Button";
import * as S from "./Top.style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { purposeSelector } from "../../../../store/purposeAtome";
import { useMutation, useQueryClient } from "react-query";
import { deleteContent } from "../../../../api/delete";
import { checkListSelector } from "../../../../store/checkAtom";
const Top = ({ total }) => {
  const queryClient = useQueryClient();
  const setPurpose = useSetRecoilState(purposeSelector);

  const checkList = useRecoilValue(checkListSelector);

  const clickCreate = () => {
    // console.log("눌림");
    setPurpose("create");
  };

  const { mutate: deletePost } = useMutation(deleteContent, {
    onSuccess: (res) => {
      console.log("성공");
      queryClient.invalidateQueries("contentList");
    },
  });

  const clickDelete = () => {
    console.log("삭제");
    console.log(checkList);
    if (checkList.length !== 0) {
      deletePost(checkList);
    } else {
      alert("하나 이상 체크해주세요.");
    }
  };
  return (
    <S.Top>
      <div className="top--left">
        <div className="top--left--total">현재 등록 : {total}</div>
        <div className="top--left--desc">등록된 전체 메일 유형입니다.</div>
      </div>
      <div className="top--right">
        <Button
          desc="등록"
          size="small"
          border="1px solid #CCD0E7"
          color="#191919"
          onClick={clickCreate}
        />
        <Button
          desc="삭제"
          size="small"
          border="1px solid #CCD0E7"
          color="#191919"
          onClick={clickDelete}
        />
      </div>
    </S.Top>
  );
};

export default Top;
