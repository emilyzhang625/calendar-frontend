function Form({ items, setItems, newItem, setNewItem }) {
  const updateName = (event) => {
    setNewItem((item) => ({ ...item, name: event.target.value }));
  };

  const updateTime = (event) => {
    setNewItem((item) => ({ ...item, time: event.target.value }));
  };

  const addItem = (event) => {
    event.preventDefault();
    if (
      items.findIndex(
        (item) => item.name == newItem.name && item.time === newItem.time
      ) !== -1
    ) {
      window.alert("Event already exists");
    } else {
      const temp = [...items, newItem];
      temp.sort((a, b) => a.time.localeCompare(b.time));
      setItems(temp);
    }
    setNewItem({ name: "", time: "" });
  };

  return (
    <form onSubmit={addItem}>
      <input type="time" value={newItem.time} onChange={updateTime}></input>
      <input
        type="text"
        value={newItem.name}
        onChange={updateName}
        required
      ></input>
      <button type="submit">Add item</button>
    </form>
  );
}

export default Form;
