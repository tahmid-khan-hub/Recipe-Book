import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { NavLink } from "react-router";
import './Navbar.css'

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() =>{
      document.body.className = darkMode ? 'dark' : 'light'
    }, [darkMode])

    const links = <>
        <NavLink className="mr-5" to="/"><li>Home</li></NavLink>
        <NavLink className="mr-5" to="allrecipe"><li>All Recipes</li></NavLink>
        <NavLink className="mr-5" to="addrecipe"><li>Add Recipe</li></NavLink>
        <NavLink to="myrecipe"><li>My Recipes</li></NavLink>
    </>

  return (
    <div className="navbar border-b-1 border-b-green-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="allrecipe"><li>All Recipes</li></NavLink>
            <NavLink to="addrecipe"><li>Add Recipe</li></NavLink>
            <NavLink to="myrecipe"><li>My Recipes</li></NavLink>

          </ul>
        </div>
        <a className="btn btn-ghost text-xl">RecipeBook</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? <FiSun size={24}></FiSun> : <FiMoon size={24}></FiMoon>}
        </a>
        <a className="btn mr-2">Login</a>
        <a className="btn mr-2">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
