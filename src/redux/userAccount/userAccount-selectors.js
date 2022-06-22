export const getToken = ({ auth }) => auth.token;
export const getUserName = ({ auth }) => auth.user.name;
export const getIsLogin = ({ auth }) => auth.isUserLogin;
export const getLoading = ({ auth }) => auth.loading;
export const getError = ({ auth }) => auth.error;
export const getVerify = ({ auth }) => auth.verify;
export const getDailyCaloriesRate = ({ auth }) =>
  auth.user?.parameters?.calories;
export const getForbidenCategories = ({ auth }) =>
  auth.user?.notAllowedProducts;
