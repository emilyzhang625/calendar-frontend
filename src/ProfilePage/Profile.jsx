import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import userService from "../services/users";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const person = JSON.parse(localStorage.getItem("curr"));

  const username = useRef(null);
  const password = useRef(null);

  const [curr, setCurr] = useState(person);
  const [users, setUsers] = useState([]);
  const [actualDel, setActualDel] = useState(false);
  const [actualClear, setActualClear] = useState(false);

  useEffect(() => {
    userService
      .getCurr(person.id)
      .then((returnedUser) => setCurr(returnedUser));
    userService.getUsers().then((returnedUsers) => setUsers(returnedUsers));
  }, []);

  const changeUsername = () => {
    if (username.current.value.trim().length === 0) {
      window.alert("Please input a username.");
    } else if (
      username.current.value.toLowerCase() === curr.username.toLowerCase()
    ) {
      window.alert(
        "This is your current username, please pick a different one."
      );
    } else {
      const index = users.findIndex(
        (user) =>
          user.username.toLowerCase() === username.current.value.toLowerCase()
      );
      if (index !== -1) {
        window.alert("Username already exists, please pick a different one.");
      } else {
        const updatedUser = { ...curr, username: username.current.value };
        userService.updateUser(updatedUser).then(() => setCurr(updatedUser));
        username.current.value = "";
        window.alert("Sucessfully updated username!");
      }
    }
  };

  const changePassword = () => {
    if (password.current.value.trim().length === 0) {
      window.alert("Please input a password.");
    } else if (password.current.value === curr.password) {
      window.alert(
        "This is your current password, please pick a different one."
      );
    } else {
      const updatedUser = { ...curr, password: password.current.value };
      userService.updateUser(updatedUser).then(() => setCurr(updatedUser));
      password.current.value = "";
      window.alert("Sucessfully updated password!");
    }
  };

  const deleteAcct = () => {
    userService.deleteUser(curr.id).then(() => {
      navigate("/");
    });
  };

  const deleteItems = () => {
    const updated = { ...curr, items: [] };
    userService.updateUser(updated).then(() => {
      setCurr(updated);
    });
    window.alert("Successfully cleared all events!");
    setActualClear(false);
  };

  const goToCal = () => {
    navigate("/calendar");
  };

  const goToUser = () => {
    navigate("/login");
  };

  return (
    <div className="big-container">
      <div className="prof-container">
        <div className="prof-header">
          <img
            className="prof-img"
            src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
          ></img>
          <div className="prof-name">
            {curr.username.toLowerCase()}'s profile
          </div>
        </div>
        <div className="prof-username">
          <input type="text" placeholder="Username" ref={username}></input>
          <button onClick={changeUsername}>Update</button>
        </div>
        <div className="prof-password">
          <input type="password" placeholder="Password" ref={password}></input>
          <button onClick={changePassword}>Update</button>
        </div>
        <div className="prof-buttons">
          <button className="big-button" onClick={() => setActualClear(true)}>
            Clear all events
          </button>
          {actualClear && (
            <div>
              <div className="warning-message">
                If you clear all of your events, they cannot be recovered. Are
                you sure you want to continue?
              </div>
              <button className="yes-button" onClick={deleteItems}>
                Yes
              </button>
              <button onClick={() => setActualClear(false)}>No</button>
            </div>
          )}
          <button className="big-button" onClick={() => setActualDel(true)}>
            Delete account
          </button>
          {actualDel && (
            <div>
              <div className="warning-message">
                If you delete your account, all of your data will be erased and
                cannot be recovered. Are you sure you want to continue?
              </div>
              <button className="yes-button" onClick={deleteAcct}>
                Yes
              </button>
              <button onClick={() => setActualDel(false)}>No</button>
            </div>
          )}
        </div>
        <div className="bottom-links">
          <button onClick={goToCal}>Return home</button>
          <button onClick={goToUser}>Sign out</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
