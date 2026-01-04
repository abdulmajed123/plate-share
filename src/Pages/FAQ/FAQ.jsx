// import React, { useState } from "react";
// import { useTheme } from "next-themes";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const faqData = [
//   {
//     question: "How can I share food?",
//     answer:
//       "You can share food by clicking 'Share Your Food' and filling out the form with details.",
//   },
//   {
//     question: "Who can receive food?",
//     answer:
//       "Anyone in need can receive food. We verify requests to ensure fair distribution.",
//   },
//   {
//     question: "Is there a cost to use FoodShare?",
//     answer:
//       "No, sharing and receiving food is completely free. We aim to reduce food waste and help the community.",
//   },
//   {
//     question: "How do I become a registered donor?",
//     answer:
//       "Sign up and complete your profile. After verification, you can add food to share.",
//   },
// ];

// const FAQ = () => {
//   const { theme } = useTheme();
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleIndex = (i) => {
//     setOpenIndex(openIndex === i ? null : i);
//   };

//   return (
//     <section
//       className={`${
//         theme === "dark"
//           ? "bg-gray-900 text-gray-100"
//           : "bg-gray-100 text-gray-900"
//       } py-16 px-4 transition-colors duration-500`}
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold mb-8 text-center">FAQ</h2>
//         <div className="space-y-4">
//           {faqData.map((item, i) => (
//             <div
//               key={i}
//               className={`border rounded-lg p-4 transition-colors duration-300 ${
//                 theme === "dark" ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <button
//                 className="flex justify-between w-full text-left font-semibold text-lg focus:outline-none"
//                 onClick={() => toggleIndex(i)}
//               >
//                 {item.question}
//                 {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
//               </button>
//               {openIndex === i && (
//                 <p
//                   className={`mt-2 ${
//                     theme === "dark" ? "text-gray-300" : "text-gray-700"
//                   }`}
//                 >
//                   {item.answer}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How can I share food?",
    answer:
      "You can share food by clicking 'Share Your Food' and filling out the form with details.",
  },
  {
    question: "Who can receive food?",
    answer:
      "Anyone in need can receive food. We verify requests to ensure fair distribution.",
  },
  {
    question: "Is there a cost to use FoodShare?",
    answer:
      "No, sharing and receiving food is completely free. We aim to reduce food waste and help the community.",
  },
  {
    question: "How do I become a registered donor?",
    answer:
      "Sign up and complete your profile. After verification, you can add food to share.",
  },
];

const FAQ = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      } py-16 px-4 transition-colors duration-500`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-12 text-center ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`border rounded-lg transition-colors duration-300 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
                  : "border-gray-200 bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg focus:outline-none"
              >
                {item.question}
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`px-4 pb-4 text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
