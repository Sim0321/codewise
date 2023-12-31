import MockApi from "../utils/mockApi";

const mockApi = new MockApi();

export const deleteContent = async (idArray) => {
  console.log("idArray :::", idArray);
  const { data } = await mockApi.delete(idArray); //추후 수정
  return data;
};
