import itemService from "../items";

function Test() {
  const handleClick = () => {
    const newItem = {
      content: "testing",
      id: 4,
    };

    itemService.addItem(newItem);
  };

  return <button onClick={handleClick}>Test</button>;
}

export default Test;
