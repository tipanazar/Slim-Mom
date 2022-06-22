import React from "react";

import DiaryProductsList from "../../modules/DiaryProductsList";
import RightSideBar from "../../modules/RightSideBar";
import DiaryAddProductForm from "../../modules/DiaryAddProductForm";
import CalendarInput from "../../shared/components/Calendar";
import Container from "../../shared/components/Container";

import { useDevice } from "../../shared/hooks/useDevice";
import backgroundMedium from "../../images/background/medium/sidebar.png";
import backgroundBig from "../../images/background/big/sidebar.png";

import styles from "./diaryPage.module.scss";

const DiaryPage = () => {
  const { isMobileDevice } = useDevice();
  return (
    <>
      <Container>
        <div className={styles.diaryBox}>
          <CalendarInput />
          {isMobileDevice || <DiaryAddProductForm />}
          <DiaryProductsList />
        </div>
        <RightSideBar />
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

export default DiaryPage;
