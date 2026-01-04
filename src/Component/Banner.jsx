// import React from "react";
// import { Link } from "react-router";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <div>
//       <section
//         className="relative bg-cover bg-center h-[70vh] transition-all duration-500"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1605470669161-06d8e96d6c3e?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/80 transition-all duration-500"></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//           {/* Animated Heading */}
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 drop-shadow-lg"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             Share Food, Share Happiness
//           </motion.h1>

//           {/* Animated Paragraph */}
//           <motion.p
//             className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
//           >
//             Connect with local donors and get food when you need it most.
//             Together, we reduce food waste and help the community.
//           </motion.p>

//           {/* Animated Button */}
//           <motion.div
//             className="flex flex-col md:flex-row gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 1 }}
//           >
//             <Link
//               to="/available-foods"
//               className="bg-linear-to-r from-pink-600 to-red-700 hover:from-red-700 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
//             >
//               🍛 View All Foods
//             </Link>

//             {/* Optional Secondary Button */}
//             <Link
//               to="/add-food"
//               className="border-2 border-pink-600 dark:border-pink-400 text-pink-600 dark:text-pink-300 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 dark:hover:bg-gray-800 transition-all duration-300"
//             >
//               ➕ Share Your Food
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Banner;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Share Food, Share Happiness",
    desc: "Connect with local donors and help reduce food waste together.",
    image:
      "https://images.unsplash.com/photo-1605470669161-06d8e96d6c3e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Reduce Waste, Feed People",
    desc: "Your extra food can bring smiles to many families.",
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Community Driven Food Sharing",
    desc: "A platform where kindness meets action.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/80" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[index].desc}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/available-foods"
                className="bg-gradient-to-r from-pink-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
              >
                🍛 View Foods
              </Link>
              <Link
                to="/add-food"
                className="border-2 border-pink-600 text-pink-600 dark:text-pink-400 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 dark:hover:bg-gray-800 transition"
              >
                ➕ Share Food
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 🔘 Dots (Manual Control) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-pink-600 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
