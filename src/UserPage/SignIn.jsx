import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/users";
import "./Form.css";

function SignIn() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsers().then((startingUsers) => setUsers(startingUsers));
  }, []);

  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const index = users.findIndex(
      (user) =>
        user.username.toLowerCase() === username.current.value.toLowerCase() &&
        user.password === password.current.value
    );

    if (
      username.current.value.trim().length === 0 ||
      password.current.value.trim().length === 0
    ) {
      window.alert("Please fill out all fields.");
    } else if (index === -1) {
      window.alert("Invalid username or password, please try again.");
    } else {
      localStorage.setItem("curr", JSON.stringify(users[index]));
      navigate("/home");
      username.current.value = "";
      password.current.value = "";
    }
  };

  const goToSignup = () => {
    navigate("/");
  };

  return (
    <div className="user-container">
      <div className="form-message">Welcome back to Calendar</div>
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
          Sign in
        </button>
        <div className="go-to">
          <div>Don't have an account yet?</div>
          <button onClick={goToSignup}>Create one here</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
