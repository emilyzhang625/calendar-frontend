import itemService from "../items";

function Test() {
  const handleClick = () => {
    const newItem = { name: "testing" };
    console.log(newItem);
    itemService.addItem(newItem);
  };

  return <button onClick={handleClick}>Test</button>;
}

export default Test;
