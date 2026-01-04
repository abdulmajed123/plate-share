import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { IoLogOut } from "react-icons/io5";
import foodLogo from "../assets/foodLogo.png";
import { useTheme } from "next-themes";
import useRole from "../Hook/useRole";

const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { role } = useRole();

  const handleSignOut = () => {
    signOutUser().catch(console.log);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Available Foods", path: "/available-foods" },
    { name: "Add Food", path: "/dashboard/add-food" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-white text-gray-900"
        } shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* LEFT: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden btn btn-ghost p-2"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={foodLogo}
                alt="FoodShare"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                FoodShare
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `font-semibold transition ${
                    isActive
                      ? "text-pink-600 dark:text-pink-400"
                      : "hover:text-pink-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT: User */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-9 rounded-full border">
                    <img
                      referrerPolicy="no-referrer"
                      src={
                        user.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      alt="user"
                    />
                  </div>
                </div>

                {/* USER DROPDOWN */}
                <ul
                  tabIndex={0}
                  className={`menu dropdown-content mt-3 w-52 rounded-box p-3 shadow ${
                    theme === "dark"
                      ? "bg-gray-900 text-gray-100"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <li className="text-center font-bold text-sm">
                    {user.displayName}
                  </li>
                  <li>
                    <NavLink
                      to={
                        role === "admin"
                          ? "/dashboard/admin-profile"
                          : "/dashboard/user-profile"
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>

                  <li className="flex justify-center py-2">
                    <input
                      type="checkbox"
                      checked={theme === "dark"}
                      onChange={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                      }
                      className="toggle"
                    />
                  </li>

                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-xs bg-linear-to-r from-pink-500 to-red-500 text-white border-0 w-full"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn bg-linear-to-r from-pink-500 to-red-600 text-white border-none"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div
            className={`lg:hidden px-4 pb-4 space-y-3 ${
              theme === "dark"
                ? "bg-gray-900 text-gray-100"
                : "bg-white text-gray-900"
            }`}
          >
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block font-semibold hover:text-pink-500"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* OFFSET */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
