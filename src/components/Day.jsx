import AddForm from "./AddForm";
import { useState } from "react";

function Day({ dayNum, daysInMonth }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleMouse = (props) => {
    setShowAddForm(props);
  };

  return (
    <>
      {dayNum < 1 || dayNum > daysInMonth ? (
        <td key={dayNum}></td>
      ) : (
        <td
          key={dayNum}
          onMouseEnter={() => handleMouse(true)}
          onMouseLeave={() => handleMouse(false)}
        >
          {dayNum} {showAddForm && <AddForm />}
        </td>
      )}
    </>
  );
}

export default Day;
