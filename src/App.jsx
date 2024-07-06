import Month from "./components/Month";
import AddForm from "./components/AddForm";
import Calendar from "./components/Calendar";
import List from "./components/List";
import "./App.css";

function App() {
  const now = new Date(2024, 5, 1);
  return (
    <div className="container">
      <div className="title">Agenda</div>
      <AddForm />
      {/* <List /> */}
      <Calendar />
    </div>
  );
}

export default App;
