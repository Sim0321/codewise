import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LoadingWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 45px;
    height: 45px;
    animation: spin 2s linear infinite;

    path {
      color: ${theme.border.gray};
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
