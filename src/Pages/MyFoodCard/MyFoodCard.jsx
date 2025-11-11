import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyFoodCard = ({ food }) => {
  const navigate = useNavigate();
  const { food_image, food_name, _id, food_qty } = food;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/available-foods");

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <div className="max-w-3xl p-2   md:max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 animate-fade-in">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:shrink-0 p-3">
          <img
            className="h-40 w-full object-cover rounded-xl md:h-full md:w-80"
            src={food_image}
            alt={food_name}
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{food_name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            Grilled Chicken and Naan is a very popular food in Bangladesh. This
            dish includes grilled chicken, naan roti, fresh salad, and sauce.
          </p>

          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li>
              <strong>📍 Location:</strong> Melandha
            </li>
            <li>
              <strong>📦 Quantity:</strong> {food_qty}
            </li>
            <li>
              <strong>📅 Expiry:</strong> Nov 15, 2025
            </li>
            <li>
              <strong>📬 Email:</strong> myfriend@gmail.com
            </li>
            <li>
              <strong>🕒 Added:</strong> Nov 10, 2025
            </li>
            <li>
              <strong>✅ Status:</strong> Available
            </li>
          </ul>

          <div className="mt-5 flex space-x-2">
            <Link
              to={`/update-food/${_id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-4 rounded-lg text-sm transition"
            >
              Update
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 px-4 rounded-lg text-sm transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodCard;
