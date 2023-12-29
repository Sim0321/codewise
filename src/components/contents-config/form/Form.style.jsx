import styled from "styled-components";
import { theme } from "./../../../styles/theme";

export const FormContainer = styled.form`
  padding: 20px 30px 30px 20px;

  label {
    width: 120px;
    height: 100%;
    background-color: #7e8da7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 1px solid ${theme.border.gray};
  }

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: inherit;
  }

  .email-item {
    display: flex;
    width: 100%;
  }

  .input-wrapper {
    background-color: ${theme.backGround.white};
    border: 1px solid ${theme.border.gray};
  }
`;

export const FlexBox = styled.div`
  width: 100%;
  height: ${(p) => p.height};
  display: flex;
  .type {
    max-width: 730px;
    .input-wrapper {
      width: 610px;
    }
  }
  .use {
    max-width: 365px;
    .input-wrapper {
      width: 245px;
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
    /* background-color: skyblue; */
    .position {
      /* background-color: pink; */
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
