import React from "react";
import foodLogo from "../assets/foodLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND + DESC */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className="flex flex-col sm:flex-row items-center md:items-center lg:items-start">
            <img
              src={foodLogo}
              alt="FoodShare Logo"
              className="w-20 h-20 rounded-full shadow-lg"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left mt-5">
              FoodShare
            </h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">
            A community platform reducing food waste, helping neighbors, and
            sharing meals with kindness.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 text-lg mt-2">
            <a
              href="https://www.facebook.com/"
              className="hover:text-green-500 dark:hover:text-green-400 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/mdabdulmajed/"
              className="hover:text-green-500 dark:hover:text-green-400 transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            <li>
              <a
                href="/"
                className="hover:text-gray-900 dark:hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-900 dark:hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-900 dark:hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SUPPORT LINKS */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            <li>
              <a
                href="/"
                className="hover:text-gray-900 dark:hover:text-white transition"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-900 dark:hover:text-white transition"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-gray-900 dark:hover:text-white transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            Get latest food listings, tips & community updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-green-400 outline-none transition"
            />
            <button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 dark:hover:bg-green-400 transition text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500">
        &copy; {new Date().getFullYear()} FoodShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
