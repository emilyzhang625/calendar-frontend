import "./Month.css";
import Day from "./Day";
import { useState } from "react";
import { useEffect } from "react";
import itemService from "../items";
import { useRef } from "react";

function Month({ year, month, startOnSun }) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const begDay = new Date(year, month, 1).getDay();
  const [items, setItems] = useState([]);
  const initialLoad = useRef(false);

  useEffect(() => {
    if (items.length !== 0 && !initialLoad.current) {
      itemService.addItem(items[items.length - 1]);
    }
    if (initialLoad.current) {
      initialLoad.current = false;
    }
  }, [items]);

  useEffect(() => {
    itemService.getItems().then((initialItems) => {
      setItems(initialItems);
      initialLoad.current = true;
    });
  }, []);

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
          items={items}
          setItems={setItems}
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
          items={items}
          setItems={setItems}
        />
      );
      offset++;
    }
    monthArr.push(<tr key={5}>{daysArr}</tr>);
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
