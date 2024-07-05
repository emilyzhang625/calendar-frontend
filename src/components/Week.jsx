import Add from "./Add";
import { useState } from "react";

function Week({ startNum, items, setItems, newItem, setNewItem }) {
  const days = [];
  const [showButton, setShowButton] = useState(false);

  const show = () => {
    setShowButton(true);
  };

  const hide = () => {
    setShowButton(false);
  };

  for (let i = 0; i < 7; i++) {
    const day = startNum + i;
    if (day < 1 || day > 31) {
      days.push(<td key={day}>{}</td>);
    } else {
      days.push(
        <td key={day} onMouseEnter={() => show()} onMouseLeave={() => hide()}>
          {day}
          {showButton && (
            <Add
              items={items}
              setItems={setItems}
              newItem={newItem}
              setNewItem={setNewItem}
            />
          )}
        </td>
      );
    }
  }

  return <tr>{days}</tr>;
}

export default Week;
