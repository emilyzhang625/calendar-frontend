import { useState } from "react";
import Form from "./Form";

function Add({ items, setItems, newItem, setNewItem }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {!showForm && <button onClick={() => setShowForm(true)}>+</button>}
      {showForm && (
        <div>
          <Form
            items={items}
            setItems={setItems}
            newItem={newItem}
            setNewItem={setNewItem}
          />
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Add;
