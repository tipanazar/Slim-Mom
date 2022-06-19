import DatePicker from 'react-datepicker';
import { useState } from 'react';

import styles from './calendar.module.scss';
import "react-datepicker/dist/react-datepicker.css";


const Calendar =  (onChange) => { 
    const [startDate, setStartDate] = useState(new Date());
    return (
      <div className={styles.calendarContainer}>
      <DatePicker className={styles.calendarInput} selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
    );  
};

export default Calendar;
