import "./Calendar.css";
import Week from "./Week";

function Calendar({ items, setItems, newItem, setNewItem }) {
  const startNum = -4;
  const weeks = [];
  for (let i = 0; i < 6; i++) {
    weeks.push(
      <Week
        key={startNum + 7 * i}
        startNum={startNum + 7 * i}
        items={items}
        setItems={setItems}
        newItem={newItem}
        setNewItem={setNewItem}
      />
    );
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        {weeks}
      </tbody>
    </table>
  );
}

export default Calendar;
