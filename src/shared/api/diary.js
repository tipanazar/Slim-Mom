import axios from "axios";

const getDiaryInfo = async (date) => {
  const { data: result } = await axios.get(`/diary/${date}`);
  return result;
};

const addProductToDiary = async (productInfo) => {
  const { data: result } = await axios.patch(`/diary/add`, { ...productInfo });
  return result;
};

const deleteProductFromDiary = async (productInfo) => {
  const { data: result } = await axios.patch(`/diary/delete`, {
    ...productInfo,
  });
  return result;
};

const diaryApi = {
  getDiaryInfo,
  addProductToDiary,
  deleteProductFromDiary,
};

export default diaryApi;
