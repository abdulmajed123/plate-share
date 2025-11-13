import { div } from "framer-motion/client";
import React from "react";

const FoodRequestCard = ({ request }) => {
  // const { location, reason, contact, name, email } = request;
  const date = new Date(request.requestDate).toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="p-1">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mt-5 transition-all duration-300 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-4 p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/70">
          <img
            src={request.photoURL}
            alt="User Avatar"
            className="w-16 h-16 rounded-full object-cover border border-gray-300 dark:border-gray-600"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {request.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {request.email}
            </p>
          </div>

          <span
            className={`ml-auto px-3 py-1 text-sm rounded-full font-medium ${
              request.status === "accepted"
                ? "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300"
                : request.status === "rejected"
                ? "bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-300"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-200"
            }`}
          >
            {request.status}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div className="flex justify-between text-sm">
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Location:
              </span>{" "}
              <span className="text-gray-700 dark:text-gray-400">
                {request.location}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Contact:
              </span>{" "}
              <span className="text-gray-700 dark:text-gray-400">
                {request.contact}
              </span>
            </p>
          </div>

          <div>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Reason:
              </span>{" "}
              <span className="text-gray-700 dark:text-gray-400">
                {request.reason}
              </span>
            </p>
          </div>

          <div className="flex justify-between text-sm mt-3">
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Food ID:
              </span>{" "}
              <span className="text-gray-700 dark:text-gray-400">
                {request.foodId}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Date:
              </span>{" "}
              <span className="text-gray-700 dark:text-gray-400">{date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRequestCard;
