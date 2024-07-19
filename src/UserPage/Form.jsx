import { useEffect } from "react";
import { useRef, useState } from "react";
import userService from "../services/users";
import CalendarPage from "../CalendarPage/Calendar";
import { useNavigate } from "react-router-dom";

function Form({ buttonName }) {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [curr, setCurr] = useState(null);
  useEffect(() => {
    userService.getUsers().then((startingUsers) => setUsers(startingUsers));
  }, []);

  console.log(users);
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    event.preventDefault();
    if (buttonName === "Sign up") {
      const alrExists = users.findIndex(
        (user) => user.username === username.current.value
      );
      if (alrExists !== -1) {
        window.alert("Username already exists, pick a different one.");
      } else {
        const newUser = {
          username: username.current.value,
          password: password.current.value,
          items: [{ name: "test", year: 2024, month: 6, day: 18 }],
        };

        username.current.value = "";
        password.current.value = "";

        userService.addUser(newUser).then((returnedUser) => {
          setUsers([...users, returnedUser]);
          setCurr(returnedUser);
          console.log("form's user", returnedUser);

          navigate("/calendar", { state: { user: returnedUser } });
        });
      }
    }
  };

  return (
    <>
      <input type="text" placeholder="Username" ref={username} required></input>
      <input
        type="password"
        placeholder="Password"
        ref={password}
        required
      ></input>
      <button onClick={handleSubmit}>{buttonName}</button>
      {/* {curr !== 0 && <CalendarPage index={curr} />} */}
    </>
  );
}

export default Form;
