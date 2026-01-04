// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useTheme } from "next-themes";
// import Loading from "../../Loading/Loading";

// const ManageFoods = () => {
//   const { theme } = useTheme();
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [sort, setSort] = useState("expire_date");
//   const [order, setOrder] = useState("asc");
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const limit = 8;

//   const serverUrl = "https://plate-share-api-server-delta.vercel.app";

//   const fetchFoods = () => {
//     setLoading(true);
//     fetch(
//       `${serverUrl}/foods?search=${search}&location=${location}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setFoods(Array.isArray(data.foods) ? data.foods : []);
//         setTotal(data.total || 0);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error("Failed to fetch foods!");
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchFoods();
//   }, [search, location, sort, order, page]);

//   const handleDelete = (id, foodName) => {
//     if (!window.confirm(`Are you sure you want to delete "${foodName}"?`))
//       return;

//     fetch(`${serverUrl}/foods/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount > 0) {
//           setFoods(foods.filter((f) => f._id !== id));
//           toast.success(`"${foodName}" deleted successfully ✅`);
//         } else {
//           toast.error(`Failed to delete "${foodName}" ❌`);
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error(`Something went wrong ❌`);
//       });
//   };

//   const totalPages = Math.ceil(total / limit);

//   if (loading) return <Loading />;

//   return (
//     <div
//       className={`p-6 min-h-screen transition-colors duration-300 ${
//         theme === "dark"
//           ? "bg-gray-900 text-gray-100"
//           : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <ToastContainer position="top-right" autoClose={3000} />
//       <h2 className="text-3xl font-bold mb-6">Manage Foods</h2>

//       {/* Search & Filter */}
//       <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search food..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className={`input input-bordered w-full md:w-1/3 ${
//             theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
//           }`}
//         />
//         <input
//           type="text"
//           placeholder="Filter by location..."
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className={`input input-bordered w-full md:w-1/3 ${
//             theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
//           }`}
//         />
//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className={`select select-bordered w-full md:w-1/6 ${
//             theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
//           }`}
//         >
//           <option value="expire_date">Expire Date</option>
//           <option value="food_name">Food Name</option>
//           <option value="food_qty">Quantity</option>
//         </select>
//         <select
//           value={order}
//           onChange={(e) => setOrder(e.target.value)}
//           className={`select select-bordered w-full md:w-1/6 ${
//             theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
//           }`}
//         >
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div
//         className={`overflow-x-auto rounded-xl shadow transition-colors duration-300 ${
//           theme === "dark" ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         <table
//           className={`table w-full ${theme === "dark" ? "text-gray-100" : ""}`}
//         >
//           <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
//             <tr>
//               <th>#</th>
//               <th>Food Name</th>
//               <th>Description</th>
//               <th>Quantity</th>
//               <th>Added By</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {foods.length > 0 ? (
//               foods.map((food, index) => (
//                 <tr
//                   key={food._id}
//                   className={
//                     theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   }
//                 >
//                   <td>{index + 1 + (page - 1) * limit}</td>
//                   <td>{food.food_name}</td>
//                   <td
//                     className="max-w-xs truncate"
//                     title={food.additional_notes}
//                   >
//                     {food.additional_notes || "-"}
//                   </td>
//                   <td>{food.food_qty}</td>
//                   <td>{food.donators_email || "Unknown"}</td>
//                   <td className="text-center">
//                     <button
//                       onClick={() => handleDelete(food._id, food.food_name)}
//                       className="btn btn-xs btn-error"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={6} className="text-center py-4">
//                   No foods found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2 mt-4">
//         <button
//           onClick={() => setPage((p) => Math.max(p - 1, 1))}
//           disabled={page === 1}
//           className="btn btn-xs"
//         >
//           Previous
//         </button>
//         <span>
//           Page {page} of {totalPages}
//         </span>
//         <button
//           onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//           disabled={page === totalPages}
//           className="btn btn-xs"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManageFoods;

// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useTheme } from "next-themes";
// import Loading from "../../Loading/Loading";
// import Swal from "sweetalert2"; // <-- add SweetAlert2
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

// const ManageFoods = () => {
//   const { theme } = useTheme();
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [sort, setSort] = useState("expire_date");
//   const [order, setOrder] = useState("asc");
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const limit = 8;

//   const serverUrl = "https://plate-share-api-server-delta.vercel.app";

//   const fetchFoods = () => {
//     setLoading(true);
//     fetch(
//       `${serverUrl}/foods?search=${search}&location=${location}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setFoods(Array.isArray(data.foods) ? data.foods : []);
//         setTotal(data.total || 0);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error("Failed to fetch foods!");
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchFoods();
//   }, [search, location, sort, order, page]);

//   const handleDelete = async (id, foodName) => {
//     const result = await MySwal.fire({
//       title: `Delete "${foodName}"?`,
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: theme === "dark" ? "#555" : "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       background: theme === "dark" ? "#1f2937" : "#fff",
//       color: theme === "dark" ? "#fff" : "#000",
//     });

//     if (result.isConfirmed) {
//       fetch(`${serverUrl}/foods/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.deletedCount > 0) {
//             setFoods(foods.filter((f) => f._id !== id));
//             toast.success(`"${foodName}" deleted successfully ✅`);
//           } else {
//             toast.error(`Failed to delete "${foodName}" ❌`);
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//           toast.error(`Something went wrong ❌`);
//         });
//     }
//   };

//   const totalPages = Math.ceil(total / limit);

//   if (loading) return <Loading />;

//   return (
//     <div
//       className={`p-6 min-h-screen transition-colors duration-300 ${
//         theme === "dark"
//           ? "bg-gray-900 text-gray-100"
//           : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <ToastContainer position="top-right" autoClose={3000} />
//       <h2 className="text-3xl font-bold mb-6">Manage Foods</h2>

//       {/* Search & Filter */}
//       <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search food..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className={`input input-bordered w-full md:w-1/3 ${
//             theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
//           }`}
//         />
//         <input
//           type="text"
//           placeholder="Filter by location..."
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className={`input input-bordered w-full md:w-1/3 ${
//             theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
//           }`}
//         />
//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className={`select select-bordered w-full md:w-1/6 ${
//             theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
//           }`}
//         >
//           <option value="expire_date">Expire Date</option>
//           <option value="food_name">Food Name</option>
//           <option value="food_qty">Quantity</option>
//         </select>
//         <select
//           value={order}
//           onChange={(e) => setOrder(e.target.value)}
//           className={`select select-bordered w-full md:w-1/6 ${
//             theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
//           }`}
//         >
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div
//         className={`overflow-x-auto rounded-xl shadow transition-colors duration-300 ${
//           theme === "dark" ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         <table
//           className={`table w-full ${theme === "dark" ? "text-gray-100" : ""}`}
//         >
//           <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
//             <tr>
//               <th>#</th>
//               <th>Food Name</th>
//               <th>Description</th>
//               <th>Quantity</th>
//               <th>Added By</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {foods.length > 0 ? (
//               foods.map((food, index) => (
//                 <tr
//                   key={food._id}
//                   className={
//                     theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   }
//                 >
//                   <td>{index + 1 + (page - 1) * limit}</td>
//                   <td>{food.food_name}</td>
//                   <td
//                     className="max-w-xs truncate"
//                     title={food.additional_notes}
//                   >
//                     {food.additional_notes || "-"}
//                   </td>
//                   <td>{food.food_qty}</td>
//                   <td>{food.donators_email || "Unknown"}</td>
//                   <td className="text-center">
//                     <button
//                       onClick={() => handleDelete(food._id, food.food_name)}
//                       className="btn btn-xs btn-error"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={6} className="text-center py-4">
//                   No foods found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2 mt-4">
//         <button
//           onClick={() => setPage((p) => Math.max(p - 1, 1))}
//           disabled={page === 1}
//           className="btn btn-xs"
//         >
//           Previous
//         </button>
//         <span>
//           Page {page} of {totalPages}
//         </span>
//         <button
//           onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//           disabled={page === totalPages}
//           className="btn btn-xs"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManageFoods;

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
import Loading from "../../Loading/Loading";
import Swal from "sweetalert2";

const ManageFoods = () => {
  const { theme } = useTheme();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("expire_date");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 8;

  const serverUrl = "https://plate-share-api-server-delta.vercel.app";

  const fetchFoods = () => {
    setLoading(true);
    fetch(
      `${serverUrl}/foods?search=${search}&location=${location}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFoods(Array.isArray(data.foods) ? data.foods : []);
        setTotal(data.total || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch foods!");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFoods();
  }, [search, location, sort, order, page]);

  const handleDelete = (id, foodName) => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: theme === "dark" ? "#1f2937" : "#fff",
      color: theme === "dark" ? "#fff" : "#000",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${serverUrl}/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setFoods(foods.filter((f) => f._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: `"${foodName}" has been deleted.`,
                icon: "success",
                background: theme === "dark" ? "#1f2937" : "#fff",
                color: theme === "dark" ? "#fff" : "#000",
              });
            } else {
              Swal.fire({
                title: "Failed!",
                text: `"${foodName}" could not be deleted.`,
                icon: "error",
                background: theme === "dark" ? "#1f2937" : "#fff",
                color: theme === "dark" ? "#fff" : "#000",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
              background: theme === "dark" ? "#1f2937" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
            });
          });
      }
    });
  };

  const totalPages = Math.ceil(total / limit);

  if (loading) return <Loading />;

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-3xl font-bold mb-6">Manage Foods</h2>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`input input-bordered w-full md:w-1/3 ${
            theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
          }`}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={`input input-bordered w-full md:w-1/3 ${
            theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
          }`}
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={`select select-bordered w-full md:w-1/6 ${
            theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
          }`}
        >
          <option value="expire_date">Expire Date</option>
          <option value="food_name">Food Name</option>
          <option value="food_qty">Quantity</option>
        </select>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className={`select select-bordered w-full md:w-1/6 ${
            theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600" : ""
          }`}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Table */}
      <div
        className={`overflow-x-auto rounded-xl shadow transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <table
          className={`table w-full ${theme === "dark" ? "text-gray-100" : ""}`}
        >
          <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
            <tr>
              <th>#</th>
              <th>Food Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Added By</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.length > 0 ? (
              foods.map((food, index) => (
                <tr
                  key={food._id}
                  className={
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }
                >
                  <td>{index + 1 + (page - 1) * limit}</td>
                  <td>{food.food_name}</td>
                  <td
                    className="max-w-xs truncate"
                    title={food.additional_notes}
                  >
                    {food.additional_notes || "-"}
                  </td>
                  <td>{food.food_qty}</td>
                  <td>{food.donators_email || "Unknown"}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(food._id, food.food_name)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No foods found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="btn btn-xs"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="btn btn-xs"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageFoods;
