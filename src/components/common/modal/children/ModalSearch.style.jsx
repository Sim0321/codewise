import styled from "styled-components";

export const ModalSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: end; */
  gap: 7px;
  font-size: 18px;

  .category {
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(70, 68, 68, 0.4);
    border-radius: 4px;
    padding: 4px 10px;
    color: #fff;

    &-name {
      max-width: 100px;
      width: 100%;
      height: 80%;
      display: flex;
      align-items: center;
      margin-right: 10px;
      border-right: 2px solid #5e5d5d;
    }
    .radio-label {
      display: flex;
      align-items: center;
      input {
        margin-right: 3px;
      }
      label {
        font-size: 14px;
        margin-right: 8px;
      }
    }
  }

  span {
    margin-top: 4px;
    color: #fff;
    font-size: 11px;
    background-color: transparent;
  }

  .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
