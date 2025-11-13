import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[70vh] transition-all duration-500"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605470669161-06d8e96d6c3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/80 transition-all duration-500"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Share Food, Share Happiness
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Connect with local donors and get food when you need it most.
            Together, we reduce food waste and help the community.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              to="/available-foods"
              className="bg-linear-to-r from-pink-600 to-red-700 hover:from-red-700 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              🍛 View All Foods
            </Link>

            {/* Optional Secondary Button */}
            <Link
              to="/add-food"
              className="border-2 border-pink-600 dark:border-pink-400 text-pink-600 dark:text-pink-300 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              ➕ Share Your Food
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
