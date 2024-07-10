import { useState, useRef } from "react";
import "./Add.css";
import itemService from "../../items";

function Add({ year, month, day, setItems, items }) {
  const [showAddButton, setShowAddButton] = useState(true);
  const nameInput = useRef(null);

  const handleSubmit = () => {
    const newItem = {
      name: nameInput.current.value,
      year: year,
      month: month,
      day: day,
    };

    if (nameInput.current.value) {
      nameInput.current.value = "";
    }

    setShowAddButton(true);
    itemService.addItem(newItem).then((returnedItem) => {
      setItems([...items, returnedItem]);
    });
  };

  const handleAddClick = (props) => {
    setShowAddButton(props);
  };

  return (
    <div>
      {showAddButton && (
        <button onClick={() => handleAddClick(false)}>+</button>
      )}
      {!showAddButton && (
        <div className="form">
          <div className="input-container">
            <input
              type="text"
              placeholder="Name of event"
              ref={nameInput}
              className="add-input"
            ></input>
          </div>
          <div className="button-container">
            <button onClick={handleSubmit}>Add</button>
            <button onClick={() => handleAddClick(true)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Add;
