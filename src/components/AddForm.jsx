import itemService from "../items";
import { useState } from "react";

function AddForm({ year, month, day }) {
  const [showAddButton, setShowAddButton] = useState(true);
  const [clickedCancel, setClickedCancel] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    year: year,
    month: month,
    day: day,
  });

  const handleSubmit = () => {
    event.preventDefault;
    console.log(newItem);
    itemService.addItem(newItem);
    setNewItem({ ...newItem, name: "" });
  };

  const handleChange = (event) => {
    setNewItem({ ...newItem, name: event.target.value });
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="event name"
              onChange={handleChange}
            ></input>
            <button type="submit">Add item</button>
          </form>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default AddForm;
