import { useState } from "react";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="title">Agenda</div>
      <Calendar />
    </div>
  );
}

export default App;
