import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

const addAccessToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const registerUser = async (userData) => {
  const { data: result } = await axios.post("/auth/register", userData);
  return result;
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
const resendVerification = async (userData) => {
  const {data} = await axios.post("/auth/verify", userData);
  return data;
};

const logoutUser = async () => {
  const result = await axios.get("/auth/logout");
  addAccessToken("");
  return result;
};

const authApi = {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  resendVerification,
};

export default authApi;
