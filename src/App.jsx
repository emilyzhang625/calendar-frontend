import CalendarPage from "./CalendarPage/Calendar";
import SignUpPage from "./UserPage/Signup";
import SignInPage from "./UserPage/SignIn";
import ProfilePage from "./ProfilePage/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
