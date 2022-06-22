import Login from "../../../modules/Auth/Login/Login";

import backgroundMedium from "../../../images/background/medium/auth.png";
import backgroundBig from "../../../images/background/big/common.png";

import styles from "./loginPage.module.scss";

const LoginPage = () => {
  return (
    <>
      <Login />
      <img
        className={styles.backgroundMedium}
        src={backgroundMedium}
        alt="backgroundImg"
      />
      <img
        className={styles.backgroundBig}
        src={backgroundBig}
        alt="backgroundImg"
      />
    </>
  );
};

export default LoginPage;
