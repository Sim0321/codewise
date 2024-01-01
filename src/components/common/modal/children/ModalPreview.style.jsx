import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const ModalPreviewContainer = styled.div`
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
  }

  .text-wrapper {
    background-color: ${theme.backGround.white};
    padding: 5px;
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
  .value {
    width: 100%;
    background-color: ${theme.backGround.configBgGray};
    height: 100%;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ccd0e7;
    display: flex;
    align-items: center;
  }
  .type {
    max-width: 730px;
    .text-wrapper {
      width: 610px;
      display: flex;
      align-items: center;
      padding-left: 15px;
    }
  }
  .use {
    max-width: 365px;

    .radio-container {
      width: 245px;
      display: flex;
      align-items: center;
      padding-left: 5px;
      span {
        padding: 5px 7px 5px 2px;
        color: ${theme.color.black};
      }

      .circle {
        width: 12px;
        height: 12px;
        border: 1px solid ${theme.border.gray};
        border-radius: 50%;
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
    .text-wrapper {
      width: calc(100% - 120px);
    }
  }

  .reason {
    width: 100%;
    .text-wrapper {
      width: calc(100% - 120px);
    }
  }
`;
