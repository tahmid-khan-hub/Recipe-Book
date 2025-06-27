import React from "react";
import { NavLink, Outlet } from "react-router";

const DashBoardLayout = () => {
  return (
    <div className="drawer lg:drawer-open bg-green-100 max-w-[1500px] mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 mb-1 lg:hidden">
            <a className="text-xl font-semibold -ml-1">
              <span className="text-3xl text-orange-600 font-bold">R</span>
              ecipeB
              <span className="text-green-700 font-bold">oo</span>k
            </a>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <a className="text-xl font-semibold ml-1">
            <span className="text-3xl text-orange-600 font-bold">R</span>ecipeB
            <span className="text-green-700 font-bold">oo</span>k
          </a>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="dashboard/allrecipe">All Recipe</NavLink>
          </li>
          <li>
            <NavLink to="dashboard/myrecipe">My Recipe</NavLink>
          </li>
          <li>
            <NavLink to="dashboard/addrecipe">Add Recipe</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardLayout;
