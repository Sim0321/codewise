import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ModalContainer = styled.div`
  background-color: #7070707f;
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
`;

export const ModalContent = styled.div`
  background-color: ${(p) => (p.roll === "search" ? "#1a1a1a" : "#fff")};
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  .close {
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
    svg {
      fill: ${(p) => (p.roll === "search" ? "#fff" : `${theme.color.black}`)};
    }

    &:hover {
      background-color: #868686;
      svg {
        fill: #fff;
      }
    }
  }
`;
