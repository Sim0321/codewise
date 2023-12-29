import { useEffect, useState } from "react";
import { getContentsList, getContentsListOption } from "../api/get";
import { createContent } from "../api/post";
import { editContent } from "../api/put";
import { deleteContent } from "../api/delete";

const useApi = (method, requestData) => {
  // console.log(method, requestData);
  // console.log("들어옴?");
  const [data, setData] = useState([]);
  // console.log("커스텀 훅 data :", data);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (method, requestData) => {
    // console.log("fetchData 안에서 :::", method, requestData);
    try {
      setIsLoading(true);
      if (method === "GET") {
        // console.log("커스텀 훅");
        const response = requestData
          ? await getContentsListOption(requestData)
          : await getContentsList();
        setData(response);
      } else if (method === "POST") {
        const response = await createContent(requestData);
        setData(response);
      } else if (method === "PUT") {
        const response = await editContent(requestData);
        setData(response);
      } else if (method === "DELETE") {
        const response = await deleteContent(requestData);
        setData(response);
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // console.log("useApiMethod 안에서");
    fetchData(method, requestData);
  }, []);

  return { data, error, isLoading };
};

export default useApi;

// method, requestDate로 모듈을 불러와 통신하는 훅
