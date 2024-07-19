import CalendarPage from "./CalendarPage/Calendar";
import UserPage from "./UserPage/User";
import FormPage from "./UserPage/Form";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
