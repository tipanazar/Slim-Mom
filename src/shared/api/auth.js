import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

const addAccessToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const loginUser = async (userData) => {
  const { data } = await axios.post("/auth/login", userData);
  console.log(data.code)
  addAccessToken(data.token);
  return data;
};

const authApi = {
  loginUser,
};

export default authApi;
