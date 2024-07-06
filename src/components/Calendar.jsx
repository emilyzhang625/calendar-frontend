import Month from "./Month";
import { useState } from "react";

function Calendar() {
  const [startOnSun, setStartOnSun] = useState(true);
  const [date, setDate] = useState(new Date());

  const changeStartDay = (props) => {
    setStartOnSun(props);
  };

  const jumpToday = () => {
    setDate(new Date());
  };

  const jumpMonth = ({ offset }) => {
    setDate(date.getFullYear(), date.getMonth() + { offset }, 1);
  };

  return (
    <div>
      <button onClick={() => changeStartDay(false)}>
        Start week on Monday
      </button>
      <button onClick={() => changeStartDay(true)}>Start week on Sunday</button>
      <button onClick={jumpToday()}>Today</button>
      <button onClick={() => jumpMonth(-1)}>Prev month</button>
      <button onClick={() => jumpMonth(1)}>Next month</button>
      <Month dateObj={date} startOnSun={startOnSun} />
    </div>
  );
}

export default Calendar;
