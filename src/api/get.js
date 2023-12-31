import MockApi from "../utils/mockApi";

const mockApi = new MockApi();

export const getContentsList = async () => {
  const { data } = await mockApi.get();
  return data;
};

export const getContentsListOption = async (request) => {
  const { data } = await mockApi.get(request);
  return data;
};
