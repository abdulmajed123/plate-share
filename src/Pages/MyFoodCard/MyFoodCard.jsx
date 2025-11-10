import React from "react";
import { Link } from "react-router";

const MyFoodCard = ({ food }) => {
  const { food_image, food_name, _id } = food;
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-200">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={food_image}
            alt="Grilled Chicken and Naan Roti"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900">{food_name}</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Grilled Chicken and Naan is a very popular food in Bangladesh. This
            dish includes grilled chicken, naan roti, fresh salad, and sauce.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li>
              <strong>📍 Pickup Location:</strong> Melandha
            </li>
            <li>
              <strong>📦 Quantity:</strong> 5
            </li>
            <li>
              <strong>📅 Expiry Date:</strong> November 15, 2025
            </li>
            <li>
              <strong>📬 Donator Email:</strong> myfriend@gmail.com
            </li>
            <li>
              <strong>🕒 Created At:</strong> November 10, 2025
            </li>
            <li>
              <strong>✅ Status:</strong> Available
            </li>
          </ul>
          <div className="mt-4 flex space-x-2">
            <Link
              to={`/update-food/${_id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Update Food
            </Link>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodCard;
