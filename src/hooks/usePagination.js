import { useRecoilState, useSetRecoilState } from "recoil";
import { requestSelector } from "../store/request";
import { checkListSelector } from "../store/checkAtom";

const usePagination = (data) => {
  console.log("커스텀 훅:", data);
  const setCheckList = useSetRecoilState(checkListSelector);
  const [request, setRequest] = useRecoilState(requestSelector);

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
