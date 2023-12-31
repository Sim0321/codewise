import MockApi from "../utils/mockApi";

const mockApi = new MockApi();

export const editContent = async (request) => {
  console.log("put.js ::", request);
  const { data } = await mockApi.put(request);
  return data;
};
