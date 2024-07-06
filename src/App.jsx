import { useState } from "react";
import List from "./components/List";
import Calendar from "./components/Calendar";
import Add from "./components/Add";
import Test from "./components/Test";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", time: "" });

  return (
    <div className="container">
      <div className="title">Agenda</div>
      <Test />
      <Add
        items={items}
        setItems={setItems}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <List items={items} setItems={setItems} />
      <div className="clear">
        {items.length > 0 && (
          <button onClick={() => setItems([])}>Clear schedule</button>
        )}
      </div>
      <Calendar
        items={items}
        setItems={setItems}
        newItem={newItem}
        setNewItem={setNewItem}
      />
    </div>
  );
}

export default App;
