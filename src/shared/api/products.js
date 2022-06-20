import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

export const getCaloriesAndProducts = async (data, bloodType) => {
    const { data: result  } = await axios.post(`/products/bloodtype/${bloodType}`, data)
    return result;
}

export const getCaloriesAndProductsForUser = async (data, bloodType) => {
    const { data: result  } = await axios.post(`/products/user/bloodtype/${bloodType}`, data)
    return result;
}