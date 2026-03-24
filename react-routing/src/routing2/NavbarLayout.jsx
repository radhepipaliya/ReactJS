import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLayout = () => {
  return (
    <>
    {/* <header className="w-full h-20 bg-white shadow flex justify-center items-center ">
      <ul className="w-1/ 2 h-full flex justify-evenly items-center">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-blue-600"}`
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/carrers"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-blue-600"}`
            }
          >
            Carrers
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/service"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-blue-600"}`
            }
          >
            Service
          </NavLink>
        </li>
      </ul>
    </header> */}
    <header className="w-full h-20 bg-white shadow flex justify-center items-center">
      <ul className="w-1/2 h-full flex justify-evenly items-center">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/user/102"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`
            }
          >
            Dynamic User
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/auth/login"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/auth/register"}
            className={({ isActive }) =>
              `text-lg p-2 font-semibold cursor-pointer rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </header>
    </>
  );
};

export default NavbarLayout;
