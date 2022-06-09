import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PublicRoute = () => {
  return <Outlet />;
};

export default PublicRoute;