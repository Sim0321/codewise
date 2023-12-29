import { useEffect, useState } from "react";
import { getContentsList, getContentsListOption } from "../api/get";
import { createContent } from "../api/post";
import { editContent } from "../api/put";
import { deleteContent } from "../api/delete";

const useApi = (method, requestData) => {
  // console.log(method, await requestData);
  // console.log("들어옴?");
  const [data, setData] = useState([]);
  // console.log("커스텀 훅 data :", data);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (method, requestData) => {
    // console.log("커스텀 훅:::", method, requestData);
    setIsLoading(true);
    try {
      let response;
      if (method === "GET") {
        response = requestData
          ? await getContentsListOption(requestData)
          : await getContentsList();
      } else if (method === "POST") {
        response = await createContent(requestData);
      } else if (method === "PUT") {
        response = await editContent(requestData);
      } else if (method === "DELETE") {
        response = await deleteContent(requestData);
      }
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, fetchData };
};

export default useApi;

// method, requestDate로 모듈을 불러와 통신하는 훅
