import AddForm from "./AddForm";
import { useState } from "react";

function Day({ day, year, month, daysInMonth }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleMouse = (props) => {
    setShowAddForm(props);
  };

  return (
    <>
      {day < 1 || day > daysInMonth ? (
        <td key={day}>{}</td>
      ) : (
        <td
          key={day}
          onMouseEnter={() => handleMouse(true)}
          onMouseLeave={() => handleMouse(false)}
        >
          {day} {showAddForm && <AddForm day={day} year={year} month={month} />}
        </td>
      )}
    </>
  );
}

export default Day;
