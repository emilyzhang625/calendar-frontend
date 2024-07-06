import itemService from "../items";
import { useState } from "react";

function Test() {
  const [showAddButton, setShowAddButton] = useState(true);
  const [newItem, setNewItem] = useState({ name: "" });

  const handleSubmit = () => {
    event.preventDefault;
    console.log(newItem);
    itemService.addItem(newItem);
    setNewItem({ name: "" });
  };

  const handleChange = (event) => {
    setNewItem({ name: event.target.value });
  };

  const handleClick = (props) => {
    setShowAddButton(props);
  };

  return (
    <div>
      {showAddButton && <button onClick={() => handleClick(false)}>+</button>}
      {!showAddButton && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="item name"
              onChange={handleChange}
            ></input>
            <button type="submit">Add item</button>
          </form>
          <button onClick={() => handleClick(true)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Test;
