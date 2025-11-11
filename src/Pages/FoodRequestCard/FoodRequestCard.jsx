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
    <div>
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border-3 border-gray-100 overflow-hidden mt-5">
        {/* Header */}
        <div className="flex items-center gap-4 p-5 border-b bg-gray-50">
          <img
            src={request.photoURL}
            alt="User Avatar"
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {request.name}
            </h3>
            <p className="text-sm text-gray-500">{request.email}</p>
          </div>
          <span className="ml-auto px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800 font-medium">
            {request.status}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <p>
              <span className="font-bold text-gray-800">Location: </span>
              <span className="font-medium">{request.location}</span>
            </p>
            <p>
              <span className="font-bold text-gray-800">Contact: </span>

              <span className="font-medium">{request.contact}</span>
            </p>
          </div>

          <div>
            <p className="text-gray-800 ">
              <span className="font-bold"> Reason: </span>
              <span className="font-medium"> {request.reason}</span>
            </p>
          </div>

          <div className="flex justify-between  mt-3">
            <p>
              <span className="font-bold">Food ID: </span>
              <span className="text-gray-700 font-medium ">
                {request.foodId}
              </span>
            </p>
            <p>
              <span className="font-bold"> Date: </span>
              <span className="text-gray-700 font-medium">{date}</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="bg-gray-50 px-5 py-3 flex justify-end gap-2">
          <button className="px-4 py-1 rounded-md text-sm border border-gray-300 hover:bg-gray-100">
            Message
          </button>
          <button className="px-4 py-1 rounded-md text-sm bg-green-600 text-white hover:bg-green-500">
            Call
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FoodRequestCard;
