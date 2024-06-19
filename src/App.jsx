import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./slice/userSlice";
import Footer from "./component/Footer";

function App() {
  const [newName, setNewName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUsernameUpdate, setNewUsernameUpdate] = useState("");
  const usersList = useSelector((state) => state.users.value);

  const dispatch = useDispatch();

  return (
    <>
      <div className="app">
        <div className="addUser">
          <input
            type="text"
            placeholder="name..."
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="username..."
            onChange={(event) => setNewUserName(event.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                addUser({
                  id: usersList[usersList.length - 1].id + 1,
                  name: newName,
                  username: newUserName,
                })
              );

              // console.log(usersList[usersList.length - 1].id + 1);
            }}
          >
            Add User
          </button>
        </div>
        <div className="displayUsers">
          {usersList.map((user) => {
            return (
              <div>
                <h3>{user.name}</h3>
                <h4>{user.username}</h4>

                <input
                  type="text"
                  placeholder="new username..."
                  onChange={(event) => setNewUsernameUpdate(event.target.value)}
                />
                <button
                  onClick={() => {
                    dispatch(
                      updateUser({ id: user.id, username: newUsernameUpdate })
                    );
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
