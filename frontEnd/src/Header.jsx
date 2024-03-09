import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isLoggedin, setLoggedin] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("user");
    navigate("/login");
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow z-50 top-0">
      <nav className="bg-gradient-to-t from-blue-300 to-slate-100 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/home" className="flex hover:scale-105 items-center">
            <span className="text-5xl rotate-345 font-bold text-transparent bg-clip-text bg-gradient-to-b hover:ease-in-out from-blue-700 to-red-700">
              E
            </span>
            <span className="font-bold text-3xl hover:ease-in-out px-1 py-3 rounded hover:text-indigo-600">
              duMate
            </span>
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/home"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="/schedule"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      ` ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                  >
                    Schedule
                  </NavLink>
                </li>
              )}
              {user && (
                <li>
                  <NavLink
                    to="/profile"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      ` ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                  >
                    {/* block py-2 pr-4 pl-3 duration-200 */}
                    Profile
                  </NavLink>
                </li>
              )}
              {user && (
                <li>
                  <NavLink
                    to="/notes"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      ` ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                  >
                    Notes
                  </NavLink>
                </li>
              )}
              {user && (
                <li onClick={logout} className="cursor-pointer">
                  Logout
                </li>
              )}
            </ul>
          </div>
          <div className="hidden lg:flex items-center lg:order-2">
            {user ? "" : <><Link to="/login">Register</Link><svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              ></path>
            </svg></>}
              {/* {user ? "logout" : "Log In"} */}
             
            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
