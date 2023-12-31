import React from "react";
import * as S from "./Modal.style";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ children, setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <S.ModalContainer>
      <div className="modal-content">
        {children}
        <div className="close" onClick={closeModal}>
          <AiOutlineClose />
        </div>
      </div>
    </S.ModalContainer>
  );
};

export default Modal;
