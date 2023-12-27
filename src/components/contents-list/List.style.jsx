import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ListContainer = styled.section`
  width: 100%;
  background-color: ${theme.backGround.white};
  font-size: 1.2rem;
  .header {
    width: 100%;
    &__top {
      padding: 0 10px 0 18px;
      background-color: ${theme.backGround.top};
      width: 100%;
      height: 30px;
      color: ${theme.color.white};

      display: flex;
      align-items: center;
      justify-content: space-between;
      &--title {
        display: flex;
        h3 {
          margin-left: 3px;
        }
      }
      .close {
        cursor: pointer;
      }
    }
    &__bottom {
      width: 100%;
      height: 40px;
      padding: 0 10px 0 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &--left {
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
      &--right {
        display: flex;
        align-items: center;
        gap: 7px;
        button {
          width: 60px;
          height: 26px;
        }
      }
    }
  }

  .table {
    height: 250px;
    &-number {
      max-width: 52px;
    }
    &-type {
      max-width: 173px;
    }
    &-title {
      max-width: 560px;
    }
    &-use {
      max-width: 140px;
    }
    &-date {
      max-width: 147px;
    }
    &-header {
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
    }
    &-list {
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

      &--content {
        padding-left: 38px;
        width: 100%;
        border-bottom: 1px solid ${theme.border.gray};
        background-color: ${theme.backGround.white};
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-weight: 400;
        height: 30px;
        .detail {
          width: 100%;
          text-align: center;
        }
        .text-left {
          padding-left: 28px;
          text-align: left;
        }
        &:hover {
          background-color: ${theme.backGround.columHover};
        }
      }
    }
    &-bottom {
      height: 30px;
      background-color: ${theme.backGround.bottom};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px 0 17px;
      &__excel {
        font-weight: 700;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      &__page {
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
          gap: 9px;
          width: 50px;
          height: 20px;
          background-color: ${theme.backGround.white};
          cursor: pointer;
        }
      }
      &__page--meta {
        font-size: 1.1rem;
        font-weight: 400;
        color: ${theme.color.black};
      }
    }
    .checkbox {
      width: 12px;
      height: 12px;
      border: 1px solid #cdd2ed;
      background-color: ${theme.backGround.white};
      border-radius: 2px;
      cursor: pointer;
      margin-right: 19px;
    }
  }
`;
