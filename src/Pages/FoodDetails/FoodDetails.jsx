import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import FoodRequestTable from "../foodRequestTable/FoodRequestTable";
import { toast } from "react-toastify";

const FoodDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [food, setFood] = useState([]);
  const [requests, setRequests] = useState([]);
  const requestData = useLoaderData();
  console.log(requestData);

  const foodRequestModalRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://plate-share-api-server-delta.vercel.app/foods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFood(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const foodRequestModal = () => {
    foodRequestModalRef.current.showModal();
  };

  const handleFoodRequestSubmit = (e) => {
    e.preventDefault();
    const formData = {
      location: e.target.location.value,
      reason: e.target.reason.value,
      contact: e.target.contact.value,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      foodId: food._id,
      status: "Pending",
      requestDate: new Date(),
    };
    console.log(formData);

    fetch("https://plate-share-api-server-delta.vercel.app/food-request", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/available-foods");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleAccept = (requestId) => {
    fetch(
      `https://plate-share-api-server-delta.vercel.app/food-request/accept/${requestId}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        toast.success("Food Request Accepted");
        // UI update - request table
        setRequests((prev) =>
          prev.map((req) =>
            req._id === requestId ? { ...req, status: "accepted" } : req
          )
        );
      });
  };

  const handleReject = (requestId) => {
    fetch(
      `https://plate-share-api-server-delta.vercel.app/food-request/reject/${requestId}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        toast.success("Food Request Rejected");
        setRequests((prev) =>
          prev.map((req) =>
            req._id === requestId ? { ...req, status: "rejected" } : req
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center max-w-6xl mx-auto p-6 space-y-12">
      {/* Food Details Section */}
      <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
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
            </div>
          </div>

          {/* Right: details */}
          <div className="md:col-span-2 p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  {food.food_name}
                </h1>
              </div>

              <div className="text-right">
                <div className="badge badge-primary badge-outline text-xs font-bold text-gray-500">
                  Quantity
                </div>
                <div className="text-lg font-medium">{food.food_qty}</div>
              </div>
            </div>

            <section className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                Additional Notes
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                {food.additional_notes}
              </p>
            </section>

            <section className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <img
                  src={food.donators_image}
                  alt={food.donators_name}
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {food.donators_name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {food.donators_email}
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={foodRequestModal}
                  className="px-4 py-2 rounded-lg bg-linear-to-r from-pink-500 to-pink-700 hover:from-pink-700 hover:to-pink-500 text-white font-medium transition"
                >
                  Request Food
                </button>

                {/* Modal */}

                <dialog
                  ref={foodRequestModalRef}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box bg-white dark:bg-gray-900 dark:text-gray-100">
                    <h3 className="font-bold text-lg text-center mb-4 text-gray-800 dark:text-gray-100">
                      Food Request Form
                    </h3>

                    <form onSubmit={handleFoodRequestSubmit}>
                      <fieldset className="fieldset space-y-3">
                        {/* Location */}
                        <div>
                          <label className="label text-gray-700 dark:text-gray-300">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            placeholder="Write Location"
                            className="input input-bordered w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                            required
                          />
                        </div>

                        {/* Reason */}
                        <div>
                          <label className="label text-gray-700 dark:text-gray-300">
                            Reason
                          </label>
                          <textarea
                            name="reason"
                            placeholder="Why Need Food?"
                            className="textarea textarea-bordered w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                            required
                          ></textarea>
                        </div>

                        {/* Contact */}
                        <div>
                          <label className="label text-gray-700 dark:text-gray-300">
                            Contact No
                          </label>
                          <input
                            type="number"
                            name="contact"
                            placeholder="Contact No."
                            className="input input-bordered w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                            required
                          />
                        </div>

                        {/* Submit Button */}
                        <button className="btn w-full text-white text-lg font-semibold bg-linear-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 mt-4 dark:border-0">
                          Submit
                        </button>
                      </fieldset>
                    </form>

                    {/* Close Button */}
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Food Requests Table (Only for Donator) */}
      {user?.email === food?.donators_email && (
        <div className="w-full">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-8">
            🍱 Request Foods
          </h2>

          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <table className="min-w-full text-sm text-gray-700 dark:text-gray-200">
              <thead className="bg-linear-to-r from-pink-500 to-red-500 text-white text-base">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Location</th>
                  <th className="py-3 px-4 text-left">Reason</th>
                  <th className="py-3 px-4 text-left">Contact No</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {requestData.map((data) => (
                  <tr
                    key={data._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200 border-b border-gray-100 dark:border-gray-700"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={
                                data.photoURL ||
                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                              }
                              alt="user avatar"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {data.name || "Unknown"}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {data.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs font-medium">
                        {data.location}
                      </span>
                    </td>

                    <td className="py-4 px-4 max-w-xs truncate">
                      {data.reason}
                    </td>

                    <td className="py-4 px-4 font-medium text-gray-800 dark:text-gray-100">
                      {data.contact}
                    </td>

                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center gap-2 flex-wrap">
                        <button
                          onClick={() => handleAccept(data._id)}
                          className="px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-semibold hover:bg-green-600 transition"
                        >
                          {data.status === "accepted" ? "Accepted" : "Accept"}
                        </button>
                        <button
                          onClick={() => handleReject(data._id)}
                          className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition"
                        >
                          {data.status === "rejected" ? "rejected" : "reject"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
};

export default FoodDetails;
