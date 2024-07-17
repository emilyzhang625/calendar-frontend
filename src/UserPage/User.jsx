import { useRef } from "react";
import { useState } from "react";
import userService from "../services/users";

function User() {
  const [users, setUsers] = useState([]);
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const newUser = {
      username: username.current.value,
      password: password.current.value,
    };
    setUsers([...users, newUser]);
    userService.addUser(newUser);
    console.log(newUser);

    if (username.current.value) username.current.value = "";
    if (password.current.value) password.current.value = "";
  };

  return (
    <div>
      <input type="text" placeholder="Username" ref={username} required></input>
      <input
        type="password"
        placeholder="Password"
        ref={password}
        required
      ></input>
      <button onClick={handleSubmit}>Sign up</button>
    </div>
  );
}

export default User;
