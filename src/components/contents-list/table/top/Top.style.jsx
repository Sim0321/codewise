import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Top = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 10px 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .top--left {
    display: flex;
    align-items: center;
    gap: 10px;
    &--total {
      padding: 3px 5px;
      background-color: ${theme.backGround.total};
      border-radius: 5px;
      font-weight: 700;
      color: ${theme.color.blue};
    }
    &--desc {
      font-weight: 700;

      color: ${theme.color.black};
    }
  }
  .top--right {
    display: flex;
    align-items: center;
    gap: 7px;
  }
`;
