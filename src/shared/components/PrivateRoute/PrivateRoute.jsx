import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  return <Outlet />;
};

export default PrivateRoute;
