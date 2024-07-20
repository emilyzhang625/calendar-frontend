import { useState, useRef } from "react";
import "./Add.css";
import userService from "../../services/users";
import { v4 as uuidv4 } from "uuid";

function Add({ year, month, day, user, setUser }) {
  const [showAddButton, setShowAddButton] = useState(true);
  const nameInput = useRef(null);

  const handleSubmit = () => {
    if (nameInput.current.value.trim().length === 0) {
      window.alert("Please input a name for this event.");
    } else {
      const newItem = {
        name: nameInput.current.value,
        year: year,
        month: month,
        day: day,
        id: uuidv4(),
      };

      nameInput.current.value = "";
      setShowAddButton(true);

      const updatedUser = {
        ...user,
        items: user.items.concat(newItem),
      };

      userService.updateUser(updatedUser).then(() => {
        setUser(updatedUser);
      });
    }
  };

  const handleAddClick = (props) => {
    setShowAddButton(props);
  };

  return (
    <div>
      {showAddButton && (
        <button onClick={() => handleAddClick(false)} className="add-button">
          +
        </button>
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
