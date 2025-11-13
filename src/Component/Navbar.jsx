import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import foodLogo from "../assets/foodLogo.png";
import { useTheme } from "next-themes";
const Navbar = () => {
  const { signOutUser, user } = use(AuthContext);
  const { theme, setTheme } = useTheme();

  const links = (
    <>
      <NavLink to="/" className="text-md font-semibold">
        Home
      </NavLink>
      <NavLink to="/available-foods" className="text-md font-semibold">
        Available Foods
      </NavLink>
    </>
  );
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-slate-900 text-gray-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-gray-800 text-gray-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>

        <div className="flex items-center ">
          <img
            className="w-12 h-12 rounded-full"
            src={foodLogo}
            alt="Food Logo"
          />
          <a className="text-2xl font-bold tracking-wide  bg-linear-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            FoodShare
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-3 text-gray-200">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-600 rounded-full">
                <img
                  alt="User Avatar"
                  referrerPolicy="no-referrer"
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-800 text-gray-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              <div className="pb-3 border-b border-gray-700">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs text-gray-400">{user.email}</li>
              </div>

              <li>
                <NavLink to="/add-food">Add Food</NavLink>
              </li>
              <li>
                <NavLink to="/manage-my-foods">My Manage Foods</NavLink>
              </li>
              <li>
                <NavLink to="/my-foods-request">My Food Requests</NavLink>
              </li>

              <div>
                <input
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  type="checkbox"
                  defaultChecked
                  className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
                />
              </div>

              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-xs mt-2 bg-linear-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white  border-0"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn  bg-linear-to-r from-pink-500 to-red-600 text-white  border-none dark:border-0"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
