import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

const addAccessToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const loginUser = async (userData) => {
  const { data } = await axios.post("/auth/login", userData);
  addAccessToken(data.token);
  return data;
};

const getCurrentUser = async (accToken) => {
  addAccessToken(accToken);
  const { data: result } = await axios.get("/auth/user");
  return result;
};

const logoutUser = async () => {
  const result = await axios.get("/auth/logout");
  addAccessToken("");
  return result;
};

const authApi = {
  loginUser,
  getCurrentUser,
  logoutUser,
};

export default authApi;
