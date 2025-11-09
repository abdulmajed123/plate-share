import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";

const FoodsCard = ({ food }) => {
  const { user } = use(AuthContext);
  return (
    <div>
      <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden flex flex-col max-w-sm mx-auto">
        {/* Image */}
        <div className="h-64 w-full overflow-hidden">
          <img
            src={food.food_image}
            alt={food.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Body */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">
            {food.food_name}
          </h3>

          <div className="mt-3 flex items-center gap-3">
            <img
              src={user.photoURL}
              alt={food.donator?.name || "Donator"}
              className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
            />

            <div className="text-sm">
              <p className="font-medium text-slate-700 dark:text-slate-300">
                {user.displayName}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {food.quantity}
              </p>
            </div>
          </div>

          <dl className="mt-4 grid grid-cols-1 gap-1 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center justify-between">
              <dt className="truncate">Pickup Location</dt>
              <dd className="truncate font-medium">{food.pickup_location}</dd>
            </div>

            <div className="flex items-center justify-between">
              <dt>Expire Date</dt>
              <dd className="font-medium">{food.expire_date}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-center">
          <button className="w-full px-4 py-2 rounded-xl font-medium shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 transition">
            View Details
          </button>
        </div>
      </article>
    </div>
  );
};

export default FoodsCard;
