import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[70vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Share Food, Share Happiness
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl"
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
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View All Foods
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
