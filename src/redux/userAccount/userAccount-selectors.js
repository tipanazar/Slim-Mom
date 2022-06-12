export const getGlobalStore = ({ auth }) => auth; // убрать если не неадо
export const getUser = ({ auth }) => auth.user;
export const getUserName = ({ auth }) => auth.user.name;
export const getIsLogin = ({ auth }) => auth.isUserLogin;
export const getLoading = ({ auth }) => auth.loading;
export const getError = ({ auth }) => auth.error;
