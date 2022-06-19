import React from "react";

import DiaryProductsList from "../../modules/DiaryProductsList";
import RightSideBar from "../../modules/RightSideBar";
import DiaryAddProductForm from "../../modules/DiaryAddProductForm";
import CalendarInput from "../../shared/components/Calendar";

import styles from "./diaryPage.module.scss";

const DiaryPage = () => { 

  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.diaryBox}>
          <CalendarInput />
          <DiaryAddProductForm />
          <DiaryProductsList />
        </div>
        <div>
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default DiaryPage;
