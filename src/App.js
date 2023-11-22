import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
// import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Axios from "axios";
import User from "./components/User";

function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hm />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

const Hm = () => {
  const [listofUsers, setListOfUsers] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [userName, setUserName] = useState("");

  const fetchData = () => {
    Axios.get("http://localhost:3001/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/users", {
      name: name,
      age: age,
      username: userName,
    })
      .then((response) => {
        alert("User created!");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const deleteUser = (userId) => {
    Axios.delete(`http://localhost:3001/users/${userId}`)
      .then((response) => {
        alert("User deleted!");
        fetchData(); // Fetch the updated user list after deleting a user
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const updateUser = (userId) => {
    const updatedName = prompt("Enter updated name:");
    const updatedAge = prompt("Enter updated age:");
    const updatedUserName = prompt("Enter updated username:");

    Axios.put(`http://localhost:3001/users/${userId}`, {
      name: updatedName,
      age: parseInt(updatedAge),
      username: updatedUserName,
    })
      .then((response) => {
        alert("User updated!");
        fetchData(); // Fetch the updated user list after updating a user
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="">
      <h1 className="font-bold text-2xl">Home fetch all the back end api</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2  py-6 ">
        {listofUsers.map((user) => {
          return (
            <div className="">
              {" "}
              <User
                className=""
                name={user.name}
                age={user.age}
                username={user.username}
                deleteUser={() => deleteUser(user._id)}
                updateUser={() => updateUser(user._id)}
              />
            </div>
          );
        })}
      </div>

      <hr />
      <div>
        <h1 className="font-bold text-2xl">Post values via the api</h1>
        <div className="flex flex-col justify-center gap-2 w-1/4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-1/2 p-2 border-separate m-2"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="w-1/2 p-2 border-separate m-2"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />

          <label htmlFor="uname">UserName</label>
          <input
            id="uname"
            type="text"
            className="w-1/2 p-2 border-separate m-2"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <button
            className="w-1/2 p-2 bg-slate-400 rounded mt-3"
            onClick={createUser}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
