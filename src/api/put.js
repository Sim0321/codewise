import MockApi from "../utils/mockApi";

export const editContent = async (data) => {
  const response = await MockApi.put(data);
  return response;
};
