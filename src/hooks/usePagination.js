import { useRecoilState, useSetRecoilState } from "recoil";
import { requestSelector } from "../store/request";
import { checkListSelector } from "../store/checkAtom";

/** 페이징 관련 비즈니스 로직을 분리한 함수 */
const usePagination = (data) => {
  const [request, setRequest] = useRecoilState(requestSelector);
  const setCheckList = useSetRecoilState(checkListSelector);

  // page+1
  const plusPage = () => {
    setRequest({ ...request, currentPage: request.currentPage + 1 });
    setCheckList([]);
  };
  // page-1
  const minusPage = () => {
    setRequest({ ...request, currentPage: request.currentPage - 1 });
    setCheckList([]);
  };

  // 마지막 page로
  const lastPage = () => {
    setRequest({ ...request, currentPage: data.page.totalPage });
    setCheckList([]);
  };

  // 첫번째 page로
  const firstPage = () => {
    setRequest({ ...request, currentPage: 1 });
    setCheckList([]);
  };

  return {
    plusPage,
    minusPage,
    lastPage,
    firstPage,
  };
};

export default usePagination;
