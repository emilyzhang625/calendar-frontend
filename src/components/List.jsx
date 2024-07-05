function List({ items, setItems }) {
  const deleteItem = (name, time) => {
    const temp = items.filter(
      (item) => !(item.name === name && item.time === time)
    );
    setItems(temp);
    console.log(temp);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {item.time} {item.name}{" "}
          <button onClick={() => deleteItem(item.name, item.time)}>x</button>
        </div>
      ))}
    </div>
  );
}
export default List;
