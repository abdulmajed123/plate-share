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

    fetch("http://localhost:3000/foods", {
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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100 px-4 py-5">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          🍱 Share Your Food
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below to share your extra food with others 💙
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Food Name */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Food Name
            </label>
            <input
              name="foodName"
              type="text"
              placeholder="e.g. Vegetable Biryani"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Food Quantity */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Food Quantity
            </label>
            <input
              name="foodQty"
              type="text"
              placeholder="e.g. Serves 2 people"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Pickup Location */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Pickup Location
            </label>
            <input
              name="pickupLocation"
              type="text"
              placeholder="Street, area, city"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Expire Date */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Expire Date
            </label>
            <input
              name="expireDate"
              type="date"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Food Image URL */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Food Image URL
            </label>
            <input
              name="imageUrl"
              type="text"
              placeholder="Paste your image link"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              name="notes"
              placeholder="Add any pickup instructions, allergens, best-before time..."
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition min-h-[120px]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
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
