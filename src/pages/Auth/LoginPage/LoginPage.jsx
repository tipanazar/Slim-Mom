import Login from "../../../modules/Auth/Login/Login";

import backgroundMedium from "../../../images/background/medium/auth.png";
import backgroundBig from "../../../images/background/big/common.png";
import Container from "../../../shared/components/Container";

import styles from "./loginPage.module.scss";

const LoginPage = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default LoginPage;
