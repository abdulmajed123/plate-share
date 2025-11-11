import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { signOutUser, user } = use(AuthContext);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/available-foods">Available Foods</NavLink>
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
    <div className="navbar bg-base-100 shadow-sm">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-3">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          // <div className="dropdown dropdown-end">
          //   <div tabIndex={0} role="button" className="btn m-1">
          //     Click ⬇️
          //   </div>
          //   <ul
          //     tabIndex="-1"
          //     className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          //   >
          //     <li>
          //       <a>Item 1</a>
          //     </li>
          //     <li>
          //       <button onClick={handleSignOut} className="btn">
          //         LogOut
          //       </button>
          //     </li>
          //   </ul>
          // </div>
          <div className="dropdown dropdown-end z-50">
            {" "}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
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
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link to={"/profile"}>
                  <FaUser /> Profile
                </Link>
              </li>

              <li>
                <Link to={"/add-food"}>Add Food</Link>
              </li>

              <li>
                <Link to={"/manage-my-foods"}>My Manage Foods</Link>
              </li>

              <li>
                <Link to={"/my-foods-request"}>My Food Requests </Link>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
    // <div className="navbar bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md sticky top-0 z-50">
    //   {/* Navbar Start */}
    //   <div className="navbar-start">
    //     {/* Mobile Hamburger */}
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 text-white"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 w-52 p-2 shadow"
    //       >
    //         {links}
    //       </ul>
    //     </div>

    //     {/* Logo */}
    //     <Link
    //       to="/"
    //       className="flex items-center gap-2 text-white font-bold text-xl"
    //     >
    //       <img
    //         src="https://img.icons8.com/external-flat-juicy-fish/64/ffffff/external-food-delivery-delivery-flat-flat-juicy-fish.png"
    //         alt="FoodShare Logo"
    //         className="w-8 h-8"
    //       />
    //       FoodShare
    //     </Link>
    //   </div>

    //   {/* Navbar Center */}
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
    //   </div>

    //   {/* Navbar End */}
    //   <div className="navbar-end">
    //     {user ? (
    //       <div className="dropdown dropdown-end z-50">
    //         <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
    //           <div className="w-10 rounded-full border-2 border-white">
    //             <img
    //               src={
    //                 user.photoURL ||
    //                 "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    //               }
    //               alt={user.displayName || "User"}
    //             />
    //           </div>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 w-52 p-2 shadow"
    //         >
    //           <div className="pb-3 border-b border-gray-200">
    //             <li className="text-sm font-bold">
    //               {user.displayName || "Anonymous"}
    //             </li>
    //             <li className="text-xs">{user.email}</li>
    //           </div>
    //           <li>
    //             <Link to="/profile">
    //               <FaUser /> Profile
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/add-food">Add Food</Link>
    //           </li>
    //           <li>
    //             <Link to="/manage-my-foods">My Manage Foods</Link>
    //           </li>
    //           <li>
    //             <Link to="/my-foods-request">My Food Requests</Link>
    //           </li>
    //           <li className="mt-2">
    //             <button
    //               onClick={handleSignOut}
    //               className="btn w-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs"
    //             >
    //               <IoLogOut /> Logout
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     ) : (
    //       <Link
    //         to="/login"
    //         className="btn btn-outline text-white border-white hover:bg-white hover:text-indigo-600"
    //       >
    //         Login
    //       </Link>
    //     )}
    //   </div>
    // </div>
  );
};

export default Navbar;
