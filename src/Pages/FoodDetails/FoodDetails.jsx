import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFood(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: large image */}
          <div className="md:col-span-1">
            <div className="h-72 md:h-full w-full relative">
              <img
                src={food.food_image}
                alt={food.food_name}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-4 top-4 bg-black/60 text-white text-xs px-3 py-1 rounded-md">
                {food.food_status}
              </div>
              <div className="absolute left-4 bottom-4 bg-white/90 dark:bg-black/70 px-3 py-1 rounded-md text-sm">
                {/* Expires: {formatDate(food.expire_date)} */}
              </div>
            </div>
          </div>

          {/* Right: details */}
          <div className="md:col-span-2 p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-2xl font-semibold leading-tight">
                  {food.food_name}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {/* {food.pickup_location} • Posted: {formatDate(food.created_at)} */}
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500">Quantity</div>
                <div className="text-lg font-medium">{food.food_qty}</div>
              </div>
            </div>

            <section className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-semibold">Additional Notes</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                {food.additional_notes}
              </p>
            </section>

            <section className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={food.donators_image}
                  alt={food.donators_name}
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <div className="text-sm font-medium">
                    {food.donators_name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {food.donators_email}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium">
                  Request Food
                </button>

                <button className="text-xs underline text-gray-600 dark:text-gray-300">
                  Contact Donator
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodDetails;
