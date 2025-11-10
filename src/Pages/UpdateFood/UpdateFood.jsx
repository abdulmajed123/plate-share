import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const UpdateFood = () => {
  const data = useLoaderData();
  console.log(data);
  const handleFoodUpdateSubmit = (e) => {
    e.preventDefault();

    const formData = {
      food_name: e.target.foodName.value,
      food_image: e.target.imageUrl.value,
      food_qty: e.target.foodQty.value,
      pickup_location: e.target.pickupLocation.value,
      expire_date: e.target.expireDate.value,
      additional_notes: e.target.notes.value,
    };
    // console.log(formData);

    fetch(`http://localhost:3000/foods/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
        🍱 Food Share — Submit Food
      </h1>

      <form onSubmit={handleFoodUpdateSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Name
          </label>
          <input
            id="foodName"
            name="foodName"
            type="text"
            placeholder="e.g. Vegetable Biryani"
            defaultValue={data.food_name}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="foodQty"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Food Quantity
          </label>
          <input
            name="foodQty"
            type="text"
            placeholder="e.g. Serves 2 people"
            defaultValue={data.food_qty}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="pickupLocation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pickup Location
          </label>
          <input
            name="pickupLocation"
            type="text"
            placeholder="Street, area, city"
            defaultValue={data.pickup_location}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="expireDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Expire Date
          </label>
          <input
            name="expireDate"
            type="date"
            defaultValue={data.expire_date}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Notes
          </label>
          <textarea
            name="notes"
            defaultValue={data.additional_notes}
            placeholder="Add any pickup instructions, allergens, best-before time, ..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Food Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            placeholder="ImgBB link will appear here"
            defaultValue={data.food_image}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
          />
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all w-full"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
