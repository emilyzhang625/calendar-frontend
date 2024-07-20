import Month from "./components/Month";
import { useState, useEffect } from "react";
import "./Calendar.css";
import { useLocation, useNavigate } from "react-router-dom";
import userService from "../services/users";

function Calendar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user: initialUser } = location.state || {};
  const { user: { id } = {} } = location.state || {}; // Extract id from location.state.user

  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    userService.getCurr(id).then((returnedUser) => setUser(returnedUser));
  }, [id]);

  const jumpToday = () => {
    setDate(new Date());
  };

  const jumpMonth = (offset) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + offset, 1);
    setDate(newDate);
  };

  const goToProf = () => {
    navigate("/profile", { state: { user: user } });
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
      <button onClick={goToProf} className="cal-prof">
        <img
          className="cal-prof"
          src="https://cdn-icons-png.freepik.com/512/2893/2893421.png"
        ></img>
      </button>
      <div className="title">Agenda</div>
      <div className="header">
        <div className="month-year">
          {monthName} {date.getFullYear()}
        </div>
        <div className="button-row">
          <button className="cal-button" onClick={() => jumpMonth(-1)}>
            {prev}
          </button>
          <button className="cal-button" onClick={jumpToday}>
            Today
          </button>
          <button className="cal-button" onClick={() => jumpMonth(1)}>
            {next}
          </button>
        </div>
      </div>

      <Month
        year={date.getFullYear()}
        month={date.getMonth()}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}

export default Calendar;
