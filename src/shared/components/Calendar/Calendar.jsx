import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import {setPickedDate} from "../../../redux/products/products-actions"

import styles from "./calendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    const day = startDate.getDate();
    const month = startDate.getMonth() + 1;
    const year = startDate.getFullYear();
    const chosenDate = `${day > 9 ? day : `0` + day}-${
      month > 9 ? month : `0` + month
    }-${year}`;
    dispatch(setPickedDate(chosenDate));
  }, [dispatch, startDate]);

  return (
    <div className={styles.calendarContainer}>
      <DatePicker
        className={styles.calendarInput}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default Calendar;
