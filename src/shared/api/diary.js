import axios from "axios";

const getDiaryInfo = async (date) => {
  const data = await axios.get(`/diary/${date}`);
  return data;
};

const addProductToDiary = async (product) => {
    const { data: result } = await axios.post(`/diary/products`, {product});  
    return result;
  };

  const deleteProductFromDiary = async ({productId,date}) => {
    const { data: result } = await axios.post(`/diary/products`, {productId,date});  
    return result;
  };

const diaryApi = {
  getDiaryInfo,
  addProductToDiary,
  deleteProductFromDiary 
};

export default diaryApi;
