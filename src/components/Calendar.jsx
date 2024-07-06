import "./Calendar.css";
import Day from "./Day";

function Calendar() {
  let start = -4;
  let month = [];
  let curr = start;

  for (let week = 0; week < 5; week++) {
    let days = [];
    for (let day = 0; day < 7; day++) {
      days.push(<Day dayNum={curr} key={curr} />);
      curr++;
    }
    month.push(<tr key={week}>{days}</tr>);
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        {month}
      </tbody>
    </table>
  );
}

export default Calendar;
