import MockApi from "../utils/mockApi";

const mockApi = new MockApi();

export const getContentsList = async () => {
  // console.log("api 폴더");
  const response = await mockApi.get();
  // console.log("api 폴더 response :", response);
  return response;
};

export const getContentsListOption = async (option) => {
  // console.log("get RequestData 있을 때 ==>", option);
  const response = await mockApi.get(option);
  // console.log("get RequestData :", response);
  return response;
};
