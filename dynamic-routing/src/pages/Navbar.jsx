import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <aside className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-blue-400">Dynamic</span>
          <span className="text-gray-300">Routing</span>
          <span className="text-green-400">Demo</span>
        </aside>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
