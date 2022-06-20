import Register from "../../../modules/Auth/Register/Register";
import backgroundImg from "../../../images/background/medium/auth.png";

import styles from "./registerPage.module.scss";

const RegisterPage = () => {
  return (
    <>
      <Register />
      <img
        className={styles.backgroundImg}
        src={backgroundImg}
        alt="backgroundImg"
      />
    </>
  );
};

export default RegisterPage;
