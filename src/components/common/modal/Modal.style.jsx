import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ModalContainer = styled.div`
  background-color: rgba(112, 112, 112, 0.5);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .modal-content {
    background-color: #fff;
    padding: 50px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .close {
    /* background-color: pink; */
    position: absolute;
    width: 20px;
    height: 20px;
    top: 15px;
    right: 15px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #868686;
      svg {
        fill: #fff;
      }
    }
  }
`;
