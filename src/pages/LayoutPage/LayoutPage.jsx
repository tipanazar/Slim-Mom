import { Outlet } from "react-router-dom";

import Header from "../../modules/Header/Header";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutPage;
