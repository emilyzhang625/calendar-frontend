import AddForm from "./AddForm";
import List from "./List";
import "./Day.css";
import { useState, useEffect } from "react";
import itemService from "../items";

function Day({ day, year, month, daysInMonth }) {
  const now = new Date();
  const currDay =
    now.getFullYear() === year &&
    now.getMonth() === month &&
    now.getDate() === day;

  const [items, setItems] = useState([]);
  useEffect(() => {
    itemService.getItems().then((startingItems) => setItems(startingItems));
  }, []);

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
            <List
              year={year}
              month={month}
              day={day}
              items={items}
              setItems={setItems}
            />
          </div>
        </td>
      )}
    </>
  );
}

export default Day;
