import React, { useEffect, useRef } from "react";
import * as S from "./Modal.style";
import { AiOutlineClose } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { searchStatusSelector } from "../../../store/searchStatusAtom";

const Modal = ({ children, setModalOpen, bg, roll, setmodalopen }) => {
  const modalContainerRef = useRef();
  const setSearchStatus = useSetRecoilState(searchStatusSelector);

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
    setSearchStatus(false);
  };

  // 배경 누르면 모달 닫히기
  const handleContainerClick = (e) => {
    if (e.target === modalContainerRef.current) {
      closeModal();
    }
  };

  // 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <S.ModalContainer
      bg={bg}
      onClick={handleContainerClick}
      ref={modalContainerRef}
    >
      <S.ModalContent roll={roll} setmodalopen={setmodalopen}>
        {children}
        <div className="close" onClick={closeModal}>
          <AiOutlineClose />
        </div>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
