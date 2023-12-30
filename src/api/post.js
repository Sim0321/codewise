import MockApi from "../utils/mockApi";

const mockApi = new MockApi();

export const createContent = async (request) => {
  console.log("request 잘 넘어옴");
  console.log(request);
  const response = await mockApi.post(request);

  return response;
};
