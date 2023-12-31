import React from "react";
import * as S from "./Modal.style";
import { AiOutlineClose } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { searchStatusSelector } from "../../../store/searchStatusAtom";

const Modal = ({ children, setModalOpen, bg, roll, setmodalopen }) => {
  // console.log(roll);
  const setSearchStatus = useSetRecoilState(searchStatusSelector);
  const closeModal = () => {
    setModalOpen(false);
    setSearchStatus(false);
  };

  return (
    <S.ModalContainer bg={bg}>
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
