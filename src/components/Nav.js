import React from "react";
// import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav() {
 
  return (
    <nav className="bg-slate-600 flex justify-between items-center py-4 px-2 ">
      <h3>Logo</h3>
      <div className=" ">
        <ul className="flex  gap-3 text-white ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
