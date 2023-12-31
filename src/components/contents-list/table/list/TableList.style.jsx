import styled from "styled-components";

export const TableListWrap = styled.ul`
  min-height: 100px;
  height: ${(p) => (p.purpose !== "default" ? "230px" : "auto")};

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #aea8a8;
  }

  &::-webkit-scrollbar-track {
    background: #cecece;
  }
`;
