import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";

const FoodsCard = ({ food }) => {
  const { user } = use(AuthContext);
  return (
    <div>
      <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col max-w-sm mx-auto transform transition-transform animate-fade-in duration-500  hover:scale-105 hover:shadow-2xl">
        {/* Image */}
        <div className="h-48 w-full overflow-hidden relative">
          <img
            src={food.food_image}
            alt={food.food_name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate mb-2">
            {food.food_name}
          </h3>

          <div className="flex items-center gap-3 mb-4">
            <img
              src={food.donators_image || "https://via.placeholder.com/40"}
              alt={food.donators_name || "Donator"}
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
            />
            <div className="text-sm">
              <p className="font-medium text-slate-700 dark:text-slate-300">
                {food.donators_name || "Anonymous"}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Quantity: {food.food_qty}
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-400 mb-5">
            <div className="flex items-center justify-between">
              <dt className="truncate">Pickup Location</dt>
              <dd className="truncate font-medium">{food.pickup_location}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Expire Date</dt>
              <dd className="font-medium">{food.expire_date}</dd>
            </div>
          </dl>

          {/* Button moved up slightly */}
          <div className="flex justify-center mt-auto">
            <Link
              to={`/food-details/${food._id}`}
              className="btn bg-linear-to-r from-pink-500 to-red-500 hover:from-red-600 hover:to-pink-500 px-6 py-2 w-full text-white   rounded-xl font-medium shadow-sm  transition-all duration-300 text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </article>
      {/* <article className="bg-gray-900 text-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col max-w-sm mx-auto transform transition-transform animate-fade-in duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="h-48 w-full overflow-hidden relative">
          <img
            src={food.food_image}
            alt={food.food_name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-white truncate mb-2">
            {food.food_name}
          </h3>

          <div className="flex items-center gap-3 mb-4">
            <img
              src={food.donators_image || "https://via.placeholder.com/40"}
              alt={food.donators_name || "Donator"}
              className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-200">
                {food.donators_name || "Anonymous"}
              </p>
              <p className="text-xs text-gray-400">Quantity: {food.food_qty}</p>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-2 text-sm text-gray-300 mb-5">
            <div className="flex items-center justify-between">
              <dt className="truncate text-gray-400">Pickup Location</dt>
              <dd className="truncate font-medium text-gray-100">
                {food.pickup_location}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-400">Expire Date</dt>
              <dd className="font-medium text-gray-100">{food.expire_date}</dd>
            </div>
          </dl>

          <div className="flex justify-center mt-auto">
            <Link
              to={`/food-details/${food._id}`}
              className="px-6 py-2 w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-medium shadow-md transition-all duration-300 text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </article> */}
    </div>
  );
};

export default FoodsCard;
