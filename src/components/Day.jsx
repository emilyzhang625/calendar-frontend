import AddForm from "./AddForm";
import { useState } from "react";

function Day({ dayNum }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleMouse = (props) => {
    setShowAddForm(props);
  };

  return (
    <>
      {dayNum < 1 || dayNum > 31 ? (
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
