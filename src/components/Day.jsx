import AddForm from "./AddForm";
import { useState } from "react";

function Day({ year, month, day, daysInMonth }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleMouse = (props) => {
    setShowAddForm(props);
  };

  return (
    <>
      {day < 1 || day > daysInMonth ? (
        <td key={day}></td>
      ) : (
        <td
          key={day}
          onMouseEnter={() => handleMouse(true)}
          onMouseLeave={() => handleMouse(false)}
        >
          {day} {showAddForm && <AddForm year={year} month={month} day={day} />}
        </td>
      )}
    </>
  );
}

export default Day;
