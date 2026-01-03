// import React from "react";
// import foodLogo from "../assets/foodLogo.png";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-200 py-10">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         {/* Logo & Name */}
//         <div className="flex items-center mb-6 md:mb-0">
//           <img src={foodLogo} alt="Website Logo" className="w-20 h-20" />
//           <span className="text-2xl font-bold bg-linear-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
//             FoodShare
//           </span>
//         </div>

//         {/* Copyright */}
//         <div className="mb-6 md:mb-0 text-center md:text-left">
//           &copy; {new Date().getFullYear()} FoodShare. All rights reserved.
//         </div>

//         {/* Social Media Links */}
//         <div className="flex space-x-4">
//           <a
//             href="#"
//             className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="#"
//             className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
//           >
//             <FaTwitter />
//           </a>
//           <a
//             href="#"
//             className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="#"
//             className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
//           >
//             <FaLinkedinIn />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import foodLogo from "../assets/foodLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            src={foodLogo}
            alt="Website Logo"
            className="w-16 h-16 rounded-full"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            FoodShare
          </span>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope className="text-pink-500" />
            <a
              href="mailto:info@foodshare.com"
              className="hover:text-pink-400 transition"
            >
              info@foodshare.com
            </a>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhone className="text-pink-500" />
            <a
              href="tel:+880123456789"
              className="hover:text-pink-400 transition"
            >
              +880 1234 567 89
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-pink-600 hover:text-white transition transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 hover:text-white transition transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 hover:text-white transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-blue-700 hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} FoodShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
