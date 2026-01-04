// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthContext";
// import Loading from "../Loading/Loading";
// import FoodsCard from "../../Component/FoodsCard";

// // Frontend sort field → Backend field mapping
// const sortFieldMap = {
//   expireDate: "expire_date",
//   food_quantity: "food_qty",
// };

// // Backend URL
// const BASE_URL = "https://plate-share-api-server-delta.vercel.app";

// const AvailableFoods = () => {
//   const { loading } = useContext(AuthContext);

//   const [foods, setFoods] = useState([]);
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [sort, setSort] = useState("expireDate");
//   const [order, setOrder] = useState("asc");
//   const [page, setPage] = useState(1);
//   const limit = 8;

//   const [total, setTotal] = useState(0);
//   const [dataLoading, setDataLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchFoods = async () => {
//       try {
//         setDataLoading(true);
//         setError("");

//         const sortParam = sortFieldMap[sort] || "expire_date";

//         const res = await fetch(
//           `${BASE_URL}/foods?search=${search}&location=${location}&sort=${sortParam}&order=${order}&page=${page}&limit=${limit}`,
//           { signal: controller.signal }
//         );

//         if (!res.ok) throw new Error("Failed to fetch foods");

//         const data = await res.json();
//         console.log("Fetched data:", data); // ✅ debug

//         // Flexible handling: backend response can be array or { foods, total }
//         const foodsArray = Array.isArray(data)
//           ? data
//           : Array.isArray(data.foods)
//           ? data.foods
//           : [];

//         const totalCount = Array.isArray(data)
//           ? data.length
//           : typeof data.total === "number"
//           ? data.total
//           : foodsArray.length;

//         setFoods(foodsArray);
//         setTotal(totalCount);
//       } catch (err) {
//         if (err.name !== "AbortError") setError("Something went wrong");
//       } finally {
//         setDataLoading(false);
//       }
//     };

//     fetchFoods();
//     return () => controller.abort();
//   }, [search, location, sort, order, page]);

//   if (loading || dataLoading) return <Loading />;

//   const totalPages = Math.ceil(total / limit);

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-4">
//       <h2 className="text-4xl font-bold mb-6 text-center underline">
//         Available Foods
//       </h2>

//       {/* Search / Filter / Sort */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Search food..."
//           className="input input-bordered"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setPage(1);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           className="input input-bordered"
//           value={location}
//           onChange={(e) => {
//             setLocation(e.target.value);
//             setPage(1);
//           }}
//         />
//         <select
//           className="select select-bordered"
//           value={sort}
//           onChange={(e) => {
//             setSort(e.target.value);
//             setPage(1);
//           }}
//         >
//           <option value="expireDate">Expire Date</option>
//           <option value="food_quantity">Quantity</option>
//         </select>
//         <select
//           className="select select-bordered"
//           value={order}
//           onChange={(e) => {
//             setOrder(e.target.value);
//             setPage(1);
//           }}
//         >
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>

//       {/* Error */}
//       {error && <p className="text-center text-red-500 mb-6">{error}</p>}

//       {/* Food Cards */}
//       {foods.length === 0 ? (
//         <p className="text-center text-gray-500">No foods found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {foods.map((food) => (
//             <FoodsCard key={food._id} food={food} />
//           ))}
//         </div>
//       )}

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-10 gap-2 flex-wrap">
//           {[...Array(totalPages).keys()].map((num) => (
//             <button
//               key={num}
//               onClick={() => setPage(num + 1)}
//               className={`btn btn-sm ${
//                 page === num + 1 ? "btn-primary" : "btn-outline"
//               }`}
//             >
//               {num + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AvailableFoods;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";
import FoodsCard from "../../Component/FoodsCard";

// Frontend sort field → Backend field mapping
const sortFieldMap = {
  expireDate: "expire_date",
  food_quantity: "food_qty",
};

// Backend URL
const BASE_URL = "https://plate-share-api-server-delta.vercel.app";

const AvailableFoods = () => {
  const { loading } = useContext(AuthContext);

  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("expireDate");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const limit = 8;

  const [total, setTotal] = useState(0);
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchFoods = async () => {
      try {
        setDataLoading(true);
        setError("");

        const sortParam = sortFieldMap[sort] || "expire_date";

        const res = await fetch(
          `${BASE_URL}/foods?search=${search}&location=${location}&sort=${sortParam}&order=${order}&page=${page}&limit=${limit}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Failed to fetch foods");

        const data = await res.json();
        console.log("Fetched data:", data);

        const foodsArray = Array.isArray(data)
          ? data
          : Array.isArray(data.foods)
          ? data.foods
          : [];

        const totalCount = Array.isArray(data)
          ? data.length
          : typeof data.total === "number"
          ? data.total
          : foodsArray.length;

        setFoods(foodsArray);
        setTotal(totalCount);
      } catch (err) {
        if (err.name !== "AbortError") setError("Something went wrong");
      } finally {
        setDataLoading(false);
      }
    };

    fetchFoods();
    return () => controller.abort();
  }, [search, location, sort, order, page]);

  if (loading || dataLoading) return <Loading />;

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-6 text-center underline">
        Available Foods
      </h2>

      {/* Search / Filter / Sort */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search food..."
          className="input input-bordered dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setPage(1);
          }}
        />
        <select
          className="select select-bordered dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
        >
          <option value="expireDate">Expire Date</option>
          <option value="food_quantity">Quantity</option>
        </select>
        <select
          className="select select-bordered dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
            setPage(1);
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Error */}
      {error && (
        <p className="text-center text-red-500 dark:text-red-400 mb-6">
          {error}
        </p>
      )}

      {/* Food Cards */}
      {foods.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No foods found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {foods.map((food) => (
            <FoodsCard key={food._id} food={food} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num + 1)}
              className={`btn btn-sm ${
                page === num + 1 ? "btn-primary" : "btn-outline"
              }`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
