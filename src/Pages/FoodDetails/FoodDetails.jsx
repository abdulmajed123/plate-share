import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import FoodRequestTable from "../foodRequestTable/FoodRequestTable";

const FoodDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [food, setFood] = useState([]);
  const requestData = useLoaderData();
  console.log(requestData);

  const foodRequestModalRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
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

    fetch("http://localhost:3000/food-request", {
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

  return (
    <main className="max-w-5xl mx-auto p-6">
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
                {/* {food.food_status} */}
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
                <button
                  onClick={foodRequestModal}
                  className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium"
                >
                  Request Food
                </button>

                <dialog
                  ref={foodRequestModalRef}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">
                      Food Request Form
                    </h3>
                    <form onSubmit={handleFoodRequestSubmit}>
                      <fieldset className="fieldset">
                        <label className="label">Location</label>
                        <input
                          type="text"
                          name="location"
                          placeholder="Write Location"
                          className="input input-bordered w-full mb-3"
                          required
                        />
                        <label className="label">Reason</label>
                        <textarea
                          name="reason"
                          placeholder="Why Need Food?"
                          className="textarea textarea-bordered w-full mb-3"
                          required
                        ></textarea>
                        <label className="label">Contact No</label>
                        <input
                          type="number"
                          name="contact"
                          placeholder="Contact No."
                          className="input input-bordered w-full mb-4"
                          required
                        />

                        <button className="btn btn-neutral mt-4">Submit</button>
                      </fieldset>
                    </form>

                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </section>
          </div>
        </div>
      </div>

      {user?.email === food?.donators_email && (
        // <div className="mt-20">
        //   <h2 className="text-2xl font-bold text-center">Request Foods</h2>
        //   <div className="overflow-x-auto">
        //     <table className="table bg-white">
        //       {/* head */}
        //       <thead>
        //         <tr>
        //           {/* <th>
        //           <label>
        //             <input type="checkbox" className="checkbox" />
        //           </label>
        //         </th> */}
        //           <th>Name</th>
        //           <th>Location</th>
        //           <th>Reason</th>
        //           <th>Contact No</th>
        //           <th>Actions</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         {/* row 1 */}

        //         {requestData.map((data) => (
        //           <tr>
        //             {/* <th>
        //           <label>
        //             <input type="checkbox" className="checkbox" />
        //           </label>
        //         </th> */}
        //             <td>
        //               <div className="flex items-center gap-3">
        //                 <div className="avatar">
        //                   <div className="mask mask-squircle h-12 w-12">
        //                     <img
        //                       src={data.photoURL}
        //                       alt="Avatar Tailwind CSS Component"
        //                     />
        //                   </div>
        //                 </div>
        //                 <div>
        //                   <div className="font-bold">{data.name}</div>
        //                   <div className="text-sm opacity-50">{data.email}</div>
        //                 </div>
        //               </div>
        //             </td>
        //             <td>
        //               <span className="badge badge-ghost badge-sm">
        //                 {data.location}
        //               </span>
        //             </td>
        //             <td>{data.reason}</td>
        //             <td>{data.contact}</td>
        //             <div className="flex items-center gap-2 mt-6">
        //               <button className="badge badge-primary ">Accept</button>
        //               <button className="badge badge-secondary">Reject</button>
        //             </div>
        //           </tr>
        //         ))}
        //       </tbody>
        //     </table>
        //   </div>
        // </div>
        <div className="mt-20 px-4">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            🍱 Request Foods
          </h2>

          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
            <table className="table w-full text-sm text-gray-700">
              {/* Table Head */}
              <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-base">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Location</th>
                  <th className="py-3 px-4 text-left">Reason</th>
                  <th className="py-3 px-4 text-left">Contact No</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {requestData.map((data) => (
                  <tr
                    key={data._id}
                    className="hover:bg-gray-50 transition duration-200 border-b border-gray-100"
                  >
                    {/* Name + Email */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={data.photoURL}
                              alt="user avatar"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {data.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {data.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {data.location}
                      </span>
                    </td>

                    {/* Reason */}
                    <td className="py-4 px-4 max-w-xs truncate">
                      {data.reason}
                    </td>

                    {/* Contact */}
                    <td className="py-4 px-4 text-gray-800 font-medium">
                      {data.contact}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button className="px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-semibold hover:bg-green-600 transition">
                          Accept
                        </button>
                        <button className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition">
                          Reject
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
