import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import userService from "../services/users";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers().then((returnedUsers) => setUsers(returnedUsers));
  }, []);

  const [items, setItems] = useState([]);
  const [currUser, setCurrUser] = useState(null);
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const newUser = {
      username: username.current.value,
      password: password.current.value,
      items: [1, 2, 3, 4, 5],
    };
    setUsers([...users, newUser]);
    userService.addUser(newUser);
    console.log(newUser);

    setItems(newUser.items);

    if (username.current.value) username.current.value = "";
    if (password.current.value) password.current.value = "";
  };

  const handleClick = () => {
    setItems([...items, 1]);
    let curr = users[0];
    curr.items = [0, 0, 0];
    console.log(curr);

    userService.updateUser(curr);
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
      <button onClick={handleClick}>Add tester</button>
      <div>{items}</div>
    </div>
  );
}

export default User;
