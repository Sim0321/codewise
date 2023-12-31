import MockApi from "../utils/mockApi";

const mockApi = new MockApi();

export const createContent = async (request) => {
  const response = await mockApi.post(request);

  return response;
};
