export const getGlobalStore = ({ auth }) => auth; // убрать если не неадо
export const getUser = ({ auth }) => auth.user;
export const getIsLogin = ({ auth }) => auth.isLogin;
export const getLoading = ({ auth }) => auth.loading;
export const getError = ({ auth }) => auth.error;
