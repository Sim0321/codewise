import { FaSpinner } from "react-icons/fa";
import * as S from "./Loading.style";

const Loading = () => {
  return (
    <S.LoadingWrap>
      <FaSpinner />
    </S.LoadingWrap>
  );
};

export default Loading;
