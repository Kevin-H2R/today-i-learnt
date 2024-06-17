"use client"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import styles from './post-calendar.module.css';

const PostCalendar = () => {
  return <DatePicker inline readOnly calendarClassName={ styles.reactDatePicker }/>
}

export default PostCalendar
