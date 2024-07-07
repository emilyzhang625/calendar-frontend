import AddForm from "./AddForm";
import List from "./List";
import "./Day.css";

function Day({ day, year, month, daysInMonth, items, setItems }) {
  return (
    <>
      {day < 1 || day > daysInMonth ? (
        <td key={day}>{}</td>
      ) : (
        <td key={day} className="table-cell">
          <div className="day-num">{day}</div>
          <div className="add-form">
            <AddForm
              day={day}
              year={year}
              month={month}
              setItems={setItems}
              items={items}
            />
          </div>
          <List year={year} month={month} day={day} items={items} />
        </td>
      )}
    </>
  );
}

export default Day;
