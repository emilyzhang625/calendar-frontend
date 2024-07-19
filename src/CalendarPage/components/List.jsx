import "./List.css";
import itemService from "../../services/items";
import userService from "../../services/users";
import { useEffect } from "react";

function List({ year, month, day, user, setUser }) {
  console.log("user.items in list", user.items);
  const filteredItems = user.items.filter(
    (item) => item.year === year && item.month === month && item.day === day
  );

  const handleDelete = (id) => {
    const updatedItems = user.items.filter((item) => item.id !== id);
    const updatedUser = {
      ...user,
      items: updatedItems,
    };

    userService.updateUser(updatedUser).then(() => {
      setUser(updatedUser);
    });
  };

  const shiftForward = (id, offset) => {
    const item = user.items.find((item) => item.id === id);
    const currDate = new Date(item.year, item.month, item.day);
    currDate.setDate(currDate.getDate() + offset);

    const updatedItem = {
      ...item,
      year: currDate.getFullYear(),
      month: currDate.getMonth(),
      day: currDate.getDate(),
    };

    const updatedItems = user.items.map((item) =>
      item.id === id ? updatedItem : item
    );

    const updatedUser = {
      ...user,
      items: updatedItems,
    };

    userService.updateUser(updatedUser).then(() => {
      setUser(updatedUser);
    });
  };

  const next = ">";
  const prev = "<";

  return filteredItems.map((item) => (
    <div className="item-container" key={item.id}>
      <div className="item">{item.name}</div>
      <div className="modify-buttons">
        <button onClick={() => shiftForward(item.id, -1)}>{prev}</button>
        <button onClick={() => shiftForward(item.id, 1)}>{next}</button>
        <button onClick={() => handleDelete(item.id)}>x</button>
      </div>
    </div>
  ));
}
export default List;
