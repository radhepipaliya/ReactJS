import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full h-20 bg-white shadow-xl flex justify-between items-center">
      <aside className="w-[20%] h-full flex items-center justify-center">
        <span className="font-semibold text-xl">My</span>
        <span className="font-semibold text-xl text-rose-700">Website</span>
      </aside>
      <nav className="w-[30%] h-full flex items-center justify-center">
        <ul className="w-full h-full flex items-center justify-center">
          <li className="text-lg text-rose-700 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-lg text-rose-700 ">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="text-lg text-rose-700 ">
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
