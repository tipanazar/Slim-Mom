import Register from "../../../modules/Auth/Register/Register";

import backgroundMedium from "../../../images/background/medium/auth.png";
import backgroundBig from "../../../images/background/big/common.png";
import Container from "../../../shared/components/Container";

import styles from "./registerPage.module.scss";

const RegisterPage = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default RegisterPage;
