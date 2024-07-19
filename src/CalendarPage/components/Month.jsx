import "./Month.css";
import Day from "./Day";

function Month({ year, month, user, setUser }) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const begDay = new Date(year, month, 1).getDay();

  let offset = 1;
  offset = -begDay + 1;

  let monthArr = [];
  let daysArr = [];

  for (let week = 0; week < 5; week++) {
    for (let day = 0; day < 7; day++) {
      daysArr.push(
        <Day
          day={offset}
          key={offset}
          year={year}
          month={month}
          daysInMonth={daysInMonth}
          user={user}
          setUser={setUser}
        />
      );
      offset++;
    }
    monthArr.push(<tr key={week}>{daysArr}</tr>);
    daysArr = [];
  }

  if (offset <= daysInMonth) {
    for (let day = 0; day < 7; day++) {
      daysArr.push(
        <Day
          day={offset}
          key={offset}
          year={year}
          month={month}
          daysInMonth={daysInMonth}
          user={user}
          setUser={setUser}
        />
      );
      offset++;
    }
    monthArr.push(<tr key={5}>{daysArr}</tr>);
  }

  let headerArr = [
    <th key="sun">Sun</th>,
    <th key="mon">Mon</th>,
    <th key="tues">Tues</th>,
    <th key="wed">Wed</th>,
    <th key="thurs">Thurs</th>,
    <th key="fri">Fri</th>,
    <th key="sat">Sat</th>,
  ];

  return (
    <>
      <table>
        <tbody>
          <tr key="headers" className="headers">
            {headerArr}
          </tr>
          {monthArr}
        </tbody>
      </table>
    </>
  );
}

export default Month;
