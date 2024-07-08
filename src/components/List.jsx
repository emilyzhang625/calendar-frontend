import "./List.css";
import itemService from "../items";

function List({ year, month, day, items, setItems }) {
  const filteredItems = items.filter(
    (item) => item.year === year && item.month === month && item.day === day
  );

  const handleDelete = (id) => {
    const toBeRemoved = items.find((item) => item.id === id);
    itemService
      .removeItem(toBeRemoved)
      .then(() => setItems(items.filter((item) => item.id !== id)));
  };

  return filteredItems.map((item) => (
    <div className="item-container" key={item.id}>
      <div className="item">{item.name}</div>
      <button className="delete-button" onClick={() => handleDelete(item.id)}>
        x
      </button>
    </div>
  ));
}
export default List;
