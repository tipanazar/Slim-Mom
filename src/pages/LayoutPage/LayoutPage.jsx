import { Outlet } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import { getIsLogin } from "../../redux/userAccount/userAccount-selectors";

import Header from "../../modules/Header/Header";
import UserInfoBar from "../../modules/UserInfoBar";

const LayoutPage = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  return (
    <>
      <Header />
      {!isLogin || <UserInfoBar />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPage;
