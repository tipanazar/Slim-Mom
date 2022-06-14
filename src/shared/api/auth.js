import axios from "axios";

const addAccessToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

 const loginUser = async (userData) => {
  console.log(userData);
  const { data: result } = await axios.post("http://localhost:4000/api/auth/login/", userData);
  addAccessToken(result.accessToken);
  return result;
};

const authApi = {

    loginUser,


  };
  
  export default authApi;
