import React from "react";
import { useSelector } from "react-redux";

import {
  getPickedDate,
  getCaloriesReceived,
} from "../../redux/products/products-selectors";
import {
  getDailyCaloriesRate,
  getForbidenCategories,
} from "../../redux/userAccount/userAccount-selectors";

import styles from "./rightSideBar.module.scss";

function RightSideBar() {
  const dailyCalories = useSelector(getDailyCaloriesRate);
  const userForbidenCategories = useSelector(getForbidenCategories);
  const caloriesReceived = useSelector(getCaloriesReceived);

  const date = useSelector(getPickedDate).replace(/-/g, ".");
  const categoriesString = Array.isArray(userForbidenCategories)
    ? userForbidenCategories.reduce((acc, item, index, arr) => {
        if (index !== Math.min(arr.length, 20) - 1) {
          acc = acc + `${item.title.ua}, `;
          return acc;
        }
        acc = acc + `${item.title.ua}`;
        return acc;
      }, "")
    : "";

  const caloriesPercent = isNaN(
    parseInt((caloriesReceived / dailyCalories) * 100)
  )
    ? 0
    : parseInt((caloriesReceived / dailyCalories) * 100);

  const caloriesRemaining = isNaN(dailyCalories - caloriesReceived)
    ? "0"
    : dailyCalories - caloriesReceived;

  return (
    <div className={styles.rightSideBarWrapper}>
      <div className={styles.rightSideBarCalories}>
        <h3 className={styles.rightSideBarHeader}>Звіт за {date}</h3>
        <ul className={styles.rightSideBarData}>
          <li className={styles.rightSideBarItem}>
            <span className={styles.rightSideBarInfo}>Залишилося</span>
            <span className={styles.rightSideBarInfo}>
              {caloriesRemaining} кал
            </span>
          </li>
          <li className={styles.rightSideBarItem}>
            <span className={styles.rightSideBarInfo}>Вжито</span>
            <span className={styles.rightSideBarInfo}>
              {caloriesReceived} кал
            </span>
          </li>
          <li className={styles.rightSideBarItem}>
            <span className={styles.rightSideBarInfo}>Добова норма</span>
            <span className={styles.rightSideBarInfo}>
              {dailyCalories ?? "0"} кал
            </span>
          </li>
          <li className={styles.rightSideBarItem}>
            <span className={styles.rightSideBarInfo}>n% від норми</span>
            <span className={styles.rightSideBarInfo}>
              {caloriesPercent ?? "0"} %
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.rightSideBarCategories}>
        <h3 className={styles.rightSideBarHeader}>Небажані продукти</h3>
        <p className={styles.rightSideBarInfo}>
          {userForbidenCategories?.length
            ? categoriesString
            : "Тут будуть показані продукти, яких Вам краще уникати"}
        </p>
      </div>
      <div className={styles.rightSideBarDecoration}></div>
    </div>
  );
}

export default RightSideBar;
