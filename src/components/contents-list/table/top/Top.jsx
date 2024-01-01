import React, { useState } from "react";
import Button from "./../../../common/button/Button";
import * as S from "./Top.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { purposeSelector } from "../../../../store/purposeAtome";
import { useMutation, useQueryClient } from "react-query";
import { deleteContent } from "../../../../api/delete";
import { checkListSelector } from "../../../../store/checkAtom";
import Modal from "../../../common/modal/Modal";
import ModalSearch from "../../../common/modal/children/ModalSearch";
import { searchStatusSelector } from "../../../../store/searchStatusAtom";
import { requestSelector } from "../../../../store/request";
const Top = ({ total }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const setPurpose = useSetRecoilState(purposeSelector);

  const [searchStatus, setSearchStatus] = useRecoilState(searchStatusSelector);

  const [request, setRequest] = useRecoilState(requestSelector);

  const [checkList, setCheckList] = useRecoilState(checkListSelector);

  /** 등록함수 */
  const clickCreate = () => {
    setPurpose("create");
  };

  const { mutate: deletePost } = useMutation(deleteContent, {
    onSuccess: () => {
      queryClient.invalidateQueries("contentList");
    },
  });

  /** 삭제 함수 */
  const clickDelete = () => {
    if (checkList.length !== 0) {
      deletePost(checkList);
      setPurpose("default");
      setCheckList([]);
    } else {
      alert("하나 이상 체크해주세요.");
    }
  };

  const openModal = () => {
    setModalOpen(true);
    setSearchStatus(true);
  };

  /** 검색 초기화 함수 */
  const resetFilter = () => {
    setRequest({
      mailType: "",
      mailTitle: "",
      ismailIUse: "",
      limit: request.limit,
      currentPage: request.currentPage,
    });
    setSearchStatus(false);
  };
  return (
    <S.Top>
      <div className="top--left">
        <div className="top--left--total">현재 등록 : {total}</div>
        <div className="top--left--desc">등록된 전체 메일 유형입니다.</div>
      </div>
      <div className="top--right">
        {searchStatus && (
          <Button
            desc="필터 삭제"
            size="long"
            border="1px solid #CCD0E7"
            color="#191919"
            onClick={resetFilter}
          />
        )}
        {!searchStatus && (
          <Button
            desc="검색"
            size="small"
            border="1px solid #CCD0E7"
            color="#191919"
            onClick={openModal}
          />
        )}
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
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} bg="#131313" roll="search">
          <ModalSearch setmodalopen={setModalOpen} />
        </Modal>
      )}
    </S.Top>
  );
};

export default Top;
