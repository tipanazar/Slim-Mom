import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../../redux/products/products-operations";
import { getPickedDate } from "../../../redux/products/products-selectors";

import styles from "./calendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const startDate = useSelector(getPickedDate);
  const dispatch = useDispatch();

  const dateChange = (date) => {
    dispatch(actions.dateSetAction(date));
    dispatch(actions.dayInfo(date));
  };
  const formatToDate = (text) => {
    const [d, m, y] = text.split("-");
    return new Date(y, m - 1, d);
  };
  return (
    <div className={styles.calendarContainer}>
      <DatePicker
        className={styles.calendarInput}
        selected={formatToDate(startDate)}
        onChange={dateChange}
      />
    </div>
  );
};

export default Calendar;
