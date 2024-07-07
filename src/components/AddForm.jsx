import { useState } from "react";
import { useRef } from "react";

function AddForm({ year, month, day, setItems, items }) {
  const [showAddButton, setShowAddButton] = useState(true);
  const [clickedCancel, setClickedCancel] = useState(false);
  const nameInput = useRef(null);

  const handleSubmit = () => {
    const newItem = {
      name: nameInput.current.value,
      year: year,
      month: month,
      day: day,
    };

    console.log("addForm newItem", newItem);

    setItems([...items, newItem]);

    // if (nameInput.current) {
    //   nameInput.current.value = ""; // Clear the input field
    // }
  };

  console.log(items);

  const handleAddClick = (props) => {
    setShowAddButton(props);
  };

  const handleCancelClick = () => {
    setClickedCancel(true);
    handleAddClick(false);
  };

  return (
    <div>
      {showAddButton && !clickedCancel && (
        <button onClick={() => handleAddClick(false)}>+</button>
      )}
      {!showAddButton && !clickedCancel && (
        <div>
          <input
            type="text"
            placeholder="Name of event"
            ref={nameInput}
          ></input>
          <button onClick={handleSubmit}>Add item</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default AddForm;
