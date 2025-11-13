import { div } from "framer-motion/client";
import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyFoodCard = ({ food }) => {
  const navigate = useNavigate();
  const {
    food_image,
    food_name,
    _id,
    food_qty,
    donators_email,
    expire_date,
    food_status,
    pickup_location,
    additional_notes,
    created_at,
  } = food;

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
        fetch(`https://plate-share-api-server-delta.vercel.app/foods/${_id}`, {
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
    <div className="p-1">
      <div className="max-w-3xl p-2  md:max-w-4xl mx-auto bg-white dark:bg-slate-800  rounded-2xl shadow-md overflow-hidden border border-gray-200 animate-fade-in dark:border-0">
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
            <h2 className="text-xl dark:text-white font-bold text-gray-900 mb-2">
              {food_name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
              {additional_notes}.
            </p>

            <ul className="mt-4 text-sm text-gray-700 space-y-1">
              <li>
                <strong className="dark:text-white ">📍 Location:</strong>{" "}
                <span className="dark:text-gray-400">{pickup_location}</span>
              </li>
              <li>
                <strong className="dark:text-white ">📦 Quantity:</strong>{" "}
                <span className="dark:text-gray-400">{food_qty}</span>
              </li>
              <li>
                <strong className="dark:text-white ">📅 Expiry:</strong>
                <span className="dark:text-gray-400"> {expire_date}</span>
              </li>
              <li>
                <strong className="dark:text-white ">📬 Email:</strong>{" "}
                <span className="dark:text-gray-400">{donators_email}</span>
              </li>
              <li>
                <strong className="dark:text-white ">🕒 Added: </strong>
                <span className="dark:text-gray-400">{created_at}</span>
              </li>
              <li>
                <strong className="dark:text-white ">✅ Status: </strong>
                <span className="dark:text-gray-400">{food_status}</span>
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
    </div>
  );
};

export default MyFoodCard;
