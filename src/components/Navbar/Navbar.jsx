import React, { use, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const privateLinks = (
    <>
      <NavLink className="mr-5" to="/">
        <li>Home</li>
      </NavLink>
      <NavLink className="mr-5" to="dashboard">
        <li>DashBoard</li>
      </NavLink>
      <NavLink className="mr-5" to="allrecipe">
        <li>All Recipes</li>
      </NavLink>
      <NavLink className="mr-5" to="addrecipe">
        <li>Add Recipe</li>
      </NavLink>
      {/* <NavLink to="myrecipe">
        <li>My Recipes</li>
      </NavLink> */}
    </>
  );

  const links = (
    <>
      <NavLink className="mr-5" to="/">
        <li>Home</li>
      </NavLink>
      <NavLink className="mr-5" to="allrecipe">
        <li>All Recipes</li>
      </NavLink>
      <NavLink className="mr-5" to="faq">
        <li>FaQ</li>
      </NavLink>
      <NavLink to="about">
        <li>About</li>
      </NavLink>
    </>
  );

  return (
    <div className=" navbar sticky top-0 z-50 border-b-1 border-b-green-400 max-w-[1393px] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-[6px] -ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-green-100 text-green-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? privateLinks : links}
          </ul>
        </div>
        <a className="text-xl font-semibold ml-1">
          <span className="text-3xl text-orange-600 font-bold">R</span>ecipeB
          <span className="text-green-700 font-bold">oo</span>k
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{user ? privateLinks : links}</ul>
      </div>
      <div className="navbar-end">
        <a onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? <FiSun size={24}></FiSun> : <FiMoon size={24}></FiMoon>}
        </a>
        <img
          id="user-avatar"
          className="w-9 h-9 mr-3 ml-2 object-cover rounded-full ring-2 ring-green-500 ring-offset-2 ring-offset-white"
          src={user?.photoURL?.trim() || "https://i.ibb.co/B5N1Fzbn/image.png"}
          alt="User Avatar"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://i.ibb.co/S4xbnSVD/image.png";
          }}
        />

        <Tooltip
          anchorId="user-avatar"
          content={user?.displayName || "User"}
          place="top"
          className="!bg-orange-500"
        />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary px-6 py-2 rounded-md text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300"
          >
            Log out
          </button>
        ) : (
          <>
            <Link to="login">
              <button className="btn mr-2 text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300">
                Login
              </button>
            </Link>
            <Link to="register">
              <button className="btn mr-2 text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300 hidden md:block ">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
