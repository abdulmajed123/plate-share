import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Share Food, Share Happiness
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">
            Connect with local donors and get food when you need it most.
            Together, we reduce food waste and help the community.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            {/* <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Search Food
            </button> */}
            <Link
              to="/available-foods"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View All Foods
            </Link>
          </div>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-100 opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Share Food, Share Happiness
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-xl drop-shadow-md">
            Connect with local donors and get food when you need it most.
            Together, we reduce food waste and help the community.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
              Search Food
            </button>
            <Link
              to="/available-foods"
              className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition"
            >
              View All Foods
            </Link>
          </div>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        {/* Soft White/Gray Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Share Food, Share Happiness
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-xl">
            Connect with local donors and get food when you need it most.
            Together, we reduce food waste and help the community.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
              Search Food
            </button>
            <Link
              to="/available-foods"
              className="bg-white border border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition"
            >
              View All Foods
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
