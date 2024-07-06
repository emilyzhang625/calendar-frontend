import "./Month.css";
import Day from "./Day";

function Month({ year, month, startOnSun }) {
  console.log(year);
  console.log(month);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const begDay = new Date(year, month, 1).getDay();

  console.log(daysInMonth);
  console.log(begDay);

  let offset = 1;

  if (startOnSun) {
    offset = -begDay + 1;
  } else {
    if (begDay === 0) {
      offset = -5;
    } else {
      offset = -begDay + 2;
    }
  }

  let monthArr = [];

  for (let week = 0; week < 5; week++) {
    let daysArr = [];
    for (let day = 0; day < 7; day++) {
      daysArr.push(
        <Day
          year={year}
          month={month}
          day={offset}
          key={offset}
          daysInMonth={daysInMonth}
        />
      );
      offset++;
      if (offset >= daysInMonth) {
        day--;
      }
    }

    monthArr.push(<tr key={week}>{daysArr}</tr>);
  }

  let headerArr = [
    <th key="sun">Sunday</th>,
    <th key="mon">Monday</th>,
    <th key="tues">Tuesday</th>,
    <th key="wed">Wednesday</th>,
    <th key="thurs">Thursday</th>,
    <th key="fri">Friday</th>,
    <th key="sat">Saturday</th>,
  ];

  if (!startOnSun) {
    const sunday = headerArr.shift();
    headerArr.push(sunday);
  }

  return (
    <table>
      <tbody>
        <tr key="headers">{headerArr}</tr>
        {monthArr}
      </tbody>
    </table>
  );
}

export default Month;
