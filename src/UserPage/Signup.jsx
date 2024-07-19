import { useEffect } from "react";
import { useRef, useState } from "react";
import userService from "../services/users";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form({ buttonName }) {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsers().then((startingUsers) => setUsers(startingUsers));
  }, []);

  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const alrExists = users.findIndex(
      (user) => user.username === username.current.value
    );

    if (username.current.value === "" || password.current.value === "") {
      window.alert("Please fill out all fields.");
    } else if (alrExists !== -1) {
      window.alert("Username already exists, please pick a different one.");
    } else {
      const newUser = {
        username: username.current.value,
        password: password.current.value,
        items: [],
      };

      userService.addUser(newUser).then((returnedUser) => {
        setUsers([...users, returnedUser]);

        navigate("/calendar", { state: { user: returnedUser } });
        username.current.value = "";
        password.current.value = "";
      });
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="user-container">
      <div className="form-message">Get started with Agenda!</div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Username"
          ref={username}
          className="form-textbox"
          required
        ></input>
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="form-textbox"
          required
        ></input>
        <button onClick={handleSubmit} className="form-button">
          Sign up
        </button>
        <div className="go-to">
          <div>Already have an account?</div>
          <button onClick={goToLogin}>Login here</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
