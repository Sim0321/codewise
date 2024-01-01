import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const EditFormContainer = styled.form`
  padding: 20px 30px 30px 20px;

  label {
    width: 120px;
    height: 100%;
    background-color: #7e8da7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-right: 1px solid ${theme.border.gray};
  }

  .email-item {
    display: flex;
    width: 100%;
    border: 1px solid ${theme.border.gray};
  }

  .input-wrapper {
    background-color: ${theme.backGround.white};
    padding: 5px;
    /* background-color: skyblue; */
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 30px;
  }
`;

export const FlexBox = styled.div`
  width: 100%;
  height: ${(p) => p.height};
  background-color: ${(p) => p.bg || "#fff"};
  display: flex;
  justify-content: end;
  padding: ${(p) => p.pd || "0px"};
  border: ${(p) => p.border || "none"};
  .type {
    max-width: 730px;
    .input-wrapper {
      width: 610px;
    }
  }
  .use {
    max-width: 365px;

    .label-container {
      width: 245px;
      display: flex;
      align-items: center;
      padding-left: 5px;
      label {
        display: inline-block;
        width: auto;
        height: auto;
        padding: 5px 7px 5px 2px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: ${theme.color.black};
      }
      input {
        margin: 0 3px 0 6px;
        cursor: pointer;
        display: none;
      }
      .circle {
        width: 12px;
        height: 12px;
        border: 1px solid ${theme.border.gray};
        border-radius: 50%;
        cursor: pointer;
        margin: 0 3px 0 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        .red {
          width: 6px;
          height: 6px;
          background-color: #ea416a;
          border-radius: 50%;
        }
      }
    }
  }
  .title {
    width: 100%;
    .input-wrapper {
      width: calc(100% - 120px);
    }
  }
  .desc {
    position: relative;
    .position {
      width: 200px;
      height: 200px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      input {
        background-color: skyblue;
        border: 1px solid;
        width: 120px;
        height: 60px;
      }
    }
  }
  .reason {
    width: 100%;
    .input-wrapper {
      width: calc(100% - 120px);
    }
  }
`;
