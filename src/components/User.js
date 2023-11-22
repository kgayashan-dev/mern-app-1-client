import React from "react";
import { FaUser } from "react-icons/fa";
const User = ({ name, age, username, deleteUser, updateUser }) => {
  return (
    <div className="relative border w-3/5 h-[25vh] bg-slate-300 rounded-md shadow-sm border-green-400 p-2" >
      <div className="flex justify-end text-green-600"><FaUser /></div>
      <h3>User Name: {name}</h3>
      <h3>User Age: {age}</h3>
      <h3>Address: {username}</h3>
      <div className="">
        <button
          onClick={deleteUser}
          className="absolute left-0 bottom-0 p-2 bg-slate-400  rounded mt-3"
        >
          Delete
        </button>
        <button
          onClick={updateUser}
          className="absolute right-0 bottom-0 p-2 bg-slate-400 rounded mt-3"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default User;
