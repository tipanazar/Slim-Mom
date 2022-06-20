import Login from "../../../modules/Auth/Login/Login";
import backgroundImg from "../../../images/background/medium/auth.png";

import styles from "./loginPage.module.scss";

const LoginPage = () => {
  return (
    <>
      <Login />
      <img
        className={styles.backgroundImg}
        src={backgroundImg}
        alt="backgroundImg"
      />
    </>
  );
};

export default LoginPage;
