import axios from "axios";

const searchProducts = async (searchQuerry) => {
  const data = await axios.get(`/products/${searchQuerry}`);  
  return data;
};

const getNotAllowedProducts = async (groupBlood) => {
  const data = await axios.get(`/products/${groupBlood}`);  
  return data;
};

const productsApi = {  
  searchProducts,
  getNotAllowedProducts,  
};

export default productsApi;