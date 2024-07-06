import itemService from "../items";
import { useEffect } from "react";
import { useState } from "react";

function List() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    itemService.getItems().then((initialItems) => {
      setItems(initialItems);
    });
  }, []);

  console.log(items);
  if (!items) return null;

  return items.map((item) => <div key={item.id}>{item.name}</div>);
}
export default List;
