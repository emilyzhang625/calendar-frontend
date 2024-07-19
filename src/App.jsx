import CalendarPage from "./CalendarPage/Calendar";
import SignUp from "./UserPage/Signup";
import Login from "./UserPage/Login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
