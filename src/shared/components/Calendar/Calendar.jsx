import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import {actions} from '../../../redux/products/products-slice';

import styles from "./calendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => { 
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {     
    dispatch(actions.set(startDate));
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
