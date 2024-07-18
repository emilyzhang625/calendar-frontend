import "./Month.css";
import Day from "./Day";
import { useState, useEffect } from "react";
import userService from "../../services/users";

function Month({ year, month }) {
  const [items, setItems] = useState([]);
  const [person, setPerson] = useState(null);
  const [change, setChange] = useState([]);
  useEffect(() => {
    userService.getUsers().then((startingUsers) => {
      setItems(startingUsers[0].items);
      setPerson(startingUsers[0]);
    });
  }, []);

  useEffect(() => {
    userService.getUsers().then((startingUsers) => {
      setItems(startingUsers[0].items);
    });
  }, [change]);

  console.log("items in month", items);
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
          user={person}
          setUser={setPerson}
          items={items}
          setItems={setItems}
          setChange={setChange}
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
          user={person}
          setUser={setPerson}
          items={items}
          setItems={setItems}
          setChange={setChange}
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

  return (
    <>
      <table>
        <tbody>
          <tr key="headers">{headerArr}</tr>
          {monthArr}
        </tbody>
      </table>
    </>
  );
}

export default Month;
