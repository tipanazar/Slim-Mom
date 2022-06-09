import { Outlet } from "react-router-dom";

import Header from "../../modules/Header/Header";
import Footer from "../../modules/Footer/Footer";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;
