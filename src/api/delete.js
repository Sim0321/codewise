import MockApi from "../utils/mockApi";

export const deleteContent = async (data) => {
  const response = await MockApi.delete({ data }); //추후 수정
  return response;
};
