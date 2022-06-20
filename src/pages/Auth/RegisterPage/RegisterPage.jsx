import Register from "../../../modules/Auth/Register/Register";

import backgroundMedium from "../../../images/background/medium/auth.png";
import backgroundBig from "../../../images/background/big/common.png";

import styles from "./registerPage.module.scss";

const RegisterPage = () => {
  return (
    <>
      <Register />
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

export default RegisterPage;
