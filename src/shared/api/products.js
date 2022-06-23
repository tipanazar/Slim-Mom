import axios from "axios";

const searchProducts = async (searchQuerry) => {
  const data = await axios.get(`/products/search/${searchQuerry}`);
  return data;
};

const getNotAllowedProducts = async (groupBlood) => {
  const data = await axios.get(`/products/allowed/${groupBlood}`);
  return data;
};


export const getCaloriesAndProducts = async (data, bloodType) => {
  const { data: result } = await axios.post(
    `/products/bloodtype/${bloodType}`,
    data
  );
  return result;
};

export const getCaloriesAndProductsForUser = async (data, bloodType) => { 
  const { data: result } = await axios.post(
    `/products/user/bloodtype/${bloodType}`,
    data
  );
  return result;
};

const productsApi = {
  searchProducts,
  getNotAllowedProducts,
  getCaloriesAndProductsForUser,
  getCaloriesAndProducts
};


export default productsApi;
