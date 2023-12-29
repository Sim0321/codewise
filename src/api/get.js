import MockApi from "../utils/mockApi";

const mockApi = new MockApi();

export const getContentsList = async () => {
  const response = await mockApi.get();
  return response.data;
};

export const getContentsListOption = async (request) => {
  const response = await mockApi.get(request);
  return response.data;
};
