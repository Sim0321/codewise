import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Table = styled.div`
  height: 250px;
  .table-number {
    max-width: 52px;
  }
  .table-type {
    max-width: 173px;
  }
  .table-title {
    max-width: 560px;
  }
  .table-use {
    max-width: 140px;
  }
  .table-date {
    max-width: 147px;
  }

  .checkbox-svg {
    width: 12px;
    height: 12px;
    margin-right: 19px;
  }
`;

export const TableHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${theme.border.black};
  border-bottom: 1px solid ${theme.border.black};
  width: 100%;
  height: 30px;
  padding-left: 38px;

  .title {
    text-align: center;
    border-left: 1px solid ${theme.border.black};
    width: 100%;

    font-weight: 500;
  }
`;

export const TableListWrap = styled.ul`
  height: 230px;

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
        li {
          border-bottom: 1px solid ${theme.border.gray};
          padding: 2px 0;
          text-align: center;
          height: 20px;
          transition: all 0.3s ease-in-out;
          &:nth-last-child(1) {
            border-bottom: none;
          }
          &:hover {
            background-color: #e9eef4;
          }
        }
      }
    }
  }
  &__page--meta {
    font-size: 1.1rem;
    font-weight: 400;
    color: ${theme.color.black};
  }
`;
