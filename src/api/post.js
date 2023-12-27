import MockApi from "../utils/mockApi";

export const createContent = async (data) => {
  const response = await MockApi.post(data);
  return response;
};
