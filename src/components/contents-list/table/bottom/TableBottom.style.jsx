import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const TableBottomWrap = styled.div`
  height: 30px;
  background-color: ${theme.backGround.bottom};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px 0 17px;
  .excel {
    font-weight: 700;
    display: flex;
    align-items: center;
    cursor: pointer;
    a {
      display: flex;
      text-decoration: none;
      color: ${theme.color.black};
    }
  }
  .page {
    display: flex;
    align-items: center;
    gap: 17px;
    &-btn-container {
      display: flex;
      align-items: center;
      gap: 4px;
      svg {
        cursor: pointer;
      }
      .current {
        width: 15px;
        height: 15px;
        padding: 3px;
        box-sizing: content-box;
        border-radius: 50%;
        background-color: ${theme.backGround.white};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2px;
      }
      span {
        margin-right: 4px;
      }
    }
    &-size {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      gap: 9px;
      width: 50px;
      height: 20px;
      background-color: ${theme.backGround.white};
      cursor: pointer;
      .select-box {
        background-color: ${theme.backGround.white};
        width: 100%;
        position: absolute;
        top: 100%;
        margin-top: 2px;
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
  &__page--meta {
    font-size: 1.1rem;
    font-weight: 400;
    color: ${theme.color.black};
  }
`;
