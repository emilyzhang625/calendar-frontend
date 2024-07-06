import { useState } from "react";
import Calendar from "./components/Calendar";
import AddForm from "./components/AddForm";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="title">Agenda</div>
      <AddForm />
      <List />
      <Calendar />
    </div>
  );
}

export default App;
