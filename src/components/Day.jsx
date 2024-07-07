import AddForm from "./AddForm";
import { useState } from "react";
import List from "./List";

function Day({ day, year, month, daysInMonth, items, setItems }) {
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
          {day}{" "}
          {showAddForm && (
            <AddForm
              day={day}
              year={year}
              month={month}
              setItems={setItems}
              items={items}
            />
          )}
          <List year={year} month={month} day={day} items={items} />
        </td>
      )}
    </>
  );
}

export default Day;
