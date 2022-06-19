export const getGlobalStore = ({ auth }) => auth; // убрать если не неадо
export const getToken = ({ auth }) => auth.token;
export const getUserName = ({ auth }) => auth.user.name;
export const getIsLogin = ({ auth }) => auth.isUserLogin;
export const getLoading = ({ auth }) => auth.loading;
export const getError = ({ auth }) => auth.error;
export const dailyCaloriesRate = ({ auth }) => auth.dailyCaloriesRate;
export const forbidenCategories = ({ auth }) => auth.forbidenCategories;
