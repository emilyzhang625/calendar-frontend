import Month from "./components/Month";
import { useState } from "react";
import "./Calendar.css";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const jumpToday = () => {
    setDate(new Date());
  };

  const jumpMonth = (offset) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + offset, 1);
    setDate(newDate);
  };

  let monthName;
  switch (date.getMonth()) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
  }

  const prev = "<";
  const next = ">";

  return (
    <div className="container">
      <div className="title">Agenda</div>
      <div className="header">
        <div className="month-year">
          {monthName} {date.getFullYear()}
        </div>
        <div className="button-row">
          <button onClick={() => jumpMonth(-1)}>{prev}</button>
          <button onClick={jumpToday}>Today</button>
          <button onClick={() => jumpMonth(1)}>{next}</button>
        </div>
      </div>

      <Month year={date.getFullYear()} month={date.getMonth()} />
    </div>
  );
}

export default Calendar;
