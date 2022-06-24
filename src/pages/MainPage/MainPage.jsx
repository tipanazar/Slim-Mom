import DailyCaloriesForm from "../../modules/DailyCaloriesForm/DailyCaloriesForm";
import backgroundMedium from "../../images/background/medium/calculator.png";
import backgroundBig from "../../images/background/big/common.png";

import styles from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <div className={styles.mainBox}>
        <DailyCaloriesForm />
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
      </div>
    </>
  );
};

export default MainPage;
