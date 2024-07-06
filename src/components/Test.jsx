import itemService from "../items";

function Test() {
  const handleClick = () => {
    const newItem = {
      name: "testing",
      id: 4,
    };
    console.log(newItem);
    itemService.addItem(newItem);
  };

  return <button onClick={handleClick}>Test</button>;
}

export default Test;
