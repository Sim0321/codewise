import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Header = styled.div`
  padding: 0 10px 0 18px;
  background-color: ${theme.backGround.top};
  width: 100%;
  height: 30px;
  color: ${theme.color.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    display: flex;
    h3 {
      margin-left: 3px;
    }
  }
  .close {
    cursor: pointer;
  }
`;
