import AddForm from "./AddForm";
import List from "./List";
import "./Day.css";

function Day({ day, year, month, daysInMonth, items, setItems }) {
  const now = new Date();
  const currDay =
    now.getFullYear() === year &&
    now.getMonth() === month &&
    now.getDate() === day;

  if (currDay) {
    console.log("currDay", year, month, day);
  }

  return (
    <>
      {day < 1 || day > daysInMonth ? (
        <td key={day}>{}</td>
      ) : (
        <td key={day} className="table-cell">
          {currDay ? (
            <div className="curr-day">{day}</div>
          ) : (
            <div className="day-num">{day}</div>
          )}
          <div className="add-form">
            <AddForm
              day={day}
              year={year}
              month={month}
              setItems={setItems}
              items={items}
            />
          </div>
          <div className="list">
            <List year={year} month={month} day={day} items={items} />
          </div>
        </td>
      )}
    </>
  );
}

export default Day;
