import CalendarPage from "./CalendarPage/Calendar";
import UserPage from "./UserPage/User";

function App() {
  return (
    <UserPage />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<UserPage />} />
    //     <Route path="/calendar" element={<ListOfItems />} />
    //     {/* <Route path="/calendar" element={<CalendarPage />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
