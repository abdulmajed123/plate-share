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
    </div>
  );
};

export default Banner;
