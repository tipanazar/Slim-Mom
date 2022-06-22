import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import { getIsLogin } from "../../../redux/userAccount/userAccount-selectors";

const PublicRoute = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  const location = useLocation();
  const from = location.state?.from.pathname || "/diary";

  if (isLogin) {
    return <Navigate to={from} />;
  }
  return <Outlet />;
};

export default PublicRoute;
