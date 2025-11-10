import React from "react";

const UpdateFood = () => {
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
    console.log(formData);
  };
  return (
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-2">
        🍱 Food Share — Submit Food
      </h1>

      <form onSubmit={handleFoodUpdateSubmit}>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Food Name
          </label>
          <input
            id="foodName"
            name="foodName"
            type="text"
            placeholder="e.g. Vegetable Biryani"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="foodQty"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Food Quantity
          </label>
          <input
            name="foodQty"
            type="text"
            placeholder="e.g. Serves 2 people"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div class="md:col-span-2">
          <label
            for="pickupLocation"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Pickup Location
          </label>
          <input
            name="pickupLocation"
            type="text"
            placeholder="Street, area, city"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            for="expireDate"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Expire Date
          </label>
          <input
            name="expireDate"
            type="date"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div class="md:col-span-2">
          <label
            for="notes"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Notes
          </label>
          <textarea
            name="notes"
            placeholder="Add any pickup instructions, allergens, best-before time, ..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
          ></textarea>
        </div>

        <div>
          <label
            for="imageUrl"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Food Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            placeholder="ImgBB link will appear here"
            readonly
            class="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
          />
        </div>

        <div class="mt-5">
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all w-full"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
