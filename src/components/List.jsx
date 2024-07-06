import itemService from "../items";
import { useEffect } from "react";
import { useState } from "react";

function List({ year, month, day }) {
  const [items, setItems] = useState(null);
  useEffect(() => {
    itemService.getItems().then((initialItems) => {
      setItems(initialItems);
    });
  }, []);

  console.log(items);
  if (!items) return null;

  const filteredItems = items.filter(
    (item) => item.year === year && item.month === month + 1 && item.day === day
  );

  return filteredItems.map((item) => <div key={item.id}>{item.name}</div>);
}
export default List;
