import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddFoods = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      food_name: e.target.foodName.value,
      food_image: e.target.imageUrl.value,
      food_qty: e.target.foodQty.value,
      pickup_location: e.target.pickupLocation.value,
      expire_date: e.target.expireDate.value,
      additional_notes: e.target.notes.value,
      food_status: "Available",
      created_at: new Date(),
      donators_name: user.displayName,
      donators_email: user.email,
      donators_image: user.photoURL,
    };
    console.log({ formData });

    fetch("https://plate-share-api-server-delta.vercel.app/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Food added successfully! 🥳");
        navigate("/available-foods");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add food!");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-4 py-5 transition-all duration-300">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 shadow-2xl rounded-2xl p-10 border border-gray-100 dark:border-gray-800 transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          🍱 Share Your Food
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Fill out the form below to share your extra food with others 💙
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Food Name */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Food Name
            </label>
            <input
              name="foodName"
              type="text"
              placeholder="e.g. Vegetable Biryani"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Food Quantity */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Food Quantity
            </label>
            <input
              name="foodQty"
              type="text"
              placeholder="e.g. Serves 2 people"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Pickup Location */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Pickup Location
            </label>
            <input
              name="pickupLocation"
              type="text"
              placeholder="Street, area, city"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Expire Date */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Expire Date
            </label>
            <input
              name="expireDate"
              type="date"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Food Image URL */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Food Image URL
            </label>
            <input
              name="imageUrl"
              type="text"
              placeholder="Paste your image link"
              className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Additional Notes
            </label>
            <textarea
              name="notes"
              placeholder="Add any pickup instructions, allergens, best-before time..."
              className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-gray-900 dark:text-gray-100 min-h-[120px]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-pink-500 to-red-500 hover:from-red-red-500  hover:to-pink-500  text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              Submit Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoods;
