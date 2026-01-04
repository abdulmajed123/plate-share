// import React, { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // ChartJS
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
// } from "chart.js";
// import { Pie, Bar } from "react-chartjs-2";
// import Loading from "../../Loading/Loading";

// // Register chart components
// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title
// );

// const AdminDashboardHome = () => {
//   const { theme } = useTheme();
//   const serverUrl = " https://plate-share-api-server-delta.vercel.app";

//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalFoods: 0,
//     availableFoods: 0,
//     expiredFoods: 0,
//   });

//   const [recentFoods, setRecentFoods] = useState([]);
//   const [recentUsers, setRecentUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     Promise.all([
//       fetch(`${serverUrl}/users`).then((res) => res.json()),
//       fetch(`${serverUrl}/foods`).then((res) => res.json()),
//     ])
//       .then(([usersData, foodsData]) => {
//         const users = Array.isArray(usersData) ? usersData : [];
//         const foods = Array.isArray(foodsData.foods) ? foodsData.foods : [];

//         setStats({
//           totalUsers: users.length,
//           totalFoods: foods.length,
//           availableFoods: foods.filter((f) => f.food_status === "Available")
//             .length,
//           expiredFoods: foods.filter((f) => f.food_status === "Expired").length,
//         });

//         setRecentUsers(users.slice(-5).reverse());
//         setRecentFoods(foods.slice(-5).reverse());
//       })
//       .catch(() => toast.error("Failed to fetch dashboard data"))
//       .finally(() => setLoading(false));
//   }, []);

//   // Pie chart for food status
//   const pieData = {
//     labels: ["Available", "Expired"],
//     datasets: [
//       {
//         data: [stats.availableFoods, stats.expiredFoods],
//         backgroundColor: ["#34D399", "#F87171"],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   // Bar chart dummy weekly foods added
//   const barData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Foods Added",
//         data: [5, 8, 2, 6, 3, 7, 4],
//         backgroundColor: "#60A5FA",
//       },
//     ],
//   };

//   if (loading) return <Loading></Loading>;

//   return (
//     <div
//       className={`p-6 min-h-screen ${
//         theme === "dark"
//           ? "bg-gray-900 text-gray-100"
//           : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <ToastContainer position="top-right" autoClose={3000} />
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       {/* Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {[
//           { title: "Total Users", value: stats.totalUsers },
//           { title: "Total Foods", value: stats.totalFoods },
//           {
//             title: "Available Foods",
//             value: stats.availableFoods,
//             color: "green",
//           },
//           { title: "Expired Foods", value: stats.expiredFoods, color: "red" },
//         ].map((card, i) => (
//           <div
//             key={i}
//             className={`p-4 rounded-xl shadow ${
//               theme === "dark" ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
//             <p
//               className={`text-2xl font-bold ${
//                 card.color === "green"
//                   ? "text-green-500"
//                   : card.color === "red"
//                   ? "text-red-500"
//                   : ""
//               }`}
//             >
//               {card.value}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
//         <div
//           className={`p-4 rounded-xl shadow ${
//             theme === "dark" ? "bg-gray-800" : "bg-white"
//           }`}
//         >
//           <h2 className="text-xl font-semibold mb-2">Food Status</h2>
//           <Pie data={pieData} />
//         </div>
//         <div
//           className={`p-4 rounded-xl shadow ${
//             theme === "dark" ? "bg-gray-800" : "bg-white"
//           }`}
//         >
//           <h2 className="text-xl font-semibold mb-2">Foods Added (Weekly)</h2>
//           <Bar data={barData} options={{ responsive: true }} />
//         </div>
//       </div>

//       {/* Recent Foods Table */}
//       <div className="mb-6 overflow-x-auto rounded-xl shadow">
//         <h2 className="text-2xl font-semibold mb-2 p-4">Recent Foods</h2>
//         <table
//           className={`table w-full ${theme === "dark" ? "text-gray-100" : ""}`}
//         >
//           <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Quantity</th>
//               <th>Status</th>
//               <th>Added By</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentFoods.length > 0 ? (
//               recentFoods.map((food, i) => (
//                 <tr
//                   key={food._id}
//                   className={
//                     theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   }
//                 >
//                   <td>{i + 1}</td>
//                   <td>{food.food_name}</td>
//                   <td>{food.food_qty}</td>
//                   <td
//                     className={
//                       food.food_status === "Available"
//                         ? "text-green-500"
//                         : "text-red-500"
//                     }
//                   >
//                     {food.food_status}
//                   </td>
//                   <td>{food.donators_email || "Unknown"}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={5} className="text-center py-4">
//                   No recent foods
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Recent Users Table */}
//       <div className="overflow-x-auto rounded-xl shadow">
//         <h2 className="text-2xl font-semibold mb-2 p-4">Recent Users</h2>
//         <table
//           className={`table w-full ${theme === "dark" ? "text-gray-100" : ""}`}
//         >
//           <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentUsers.length > 0 ? (
//               recentUsers.map((user, i) => (
//                 <tr
//                   key={user._id}
//                   className={
//                     theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   }
//                 >
//                   <td>{i + 1}</td>
//                   <td>{user.name || user.displayName}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role || "user"}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="text-center py-4">
//                   No recent users
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardHome;

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Pie, Bar } from "react-chartjs-2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Loading/Loading";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const AdminDashboardHome = () => {
  const { theme } = useTheme();
  const serverUrl = "https://plate-share-api-server-delta.vercel.app"; // Backend

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalFoods: 0,
    availableFoods: 0,
    expiredFoods: 0,
  });
  const [recentFoods, setRecentFoods] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`${serverUrl}/users`).then((res) => res.json()),
      fetch(`${serverUrl}/total-foods`).then((res) => res.json()),
    ])
      .then(([usersData, foodsData]) => {
        const users = Array.isArray(usersData) ? usersData : [];
        const foods = Array.isArray(foodsData.foods) ? foodsData.foods : [];

        setStats({
          totalUsers: users.length,
          totalFoods: foods.length,
          availableFoods: foods.filter((f) => f.food_status === "Available")
            .length,
          expiredFoods: foods.filter((f) => f.food_status === "Expired").length,
        });

        setRecentUsers(users.slice(-5).reverse());
        setRecentFoods(foods.slice(-5).reverse());
      })
      .catch(() => toast.error("Failed to fetch dashboard data"))
      .finally(() => setLoading(false));
  }, []);

  const pieData = {
    labels: ["Available", "Expired"],
    datasets: [
      {
        data: [stats.availableFoods, stats.expiredFoods],
        backgroundColor: ["#34D399", "#F87171"],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Foods Added",
        data: [5, 8, 2, 6, 3, 7, 4],
        backgroundColor: "#60A5FA",
      },
    ],
  };

  if (loading) return <Loading />;

  return (
    <div
      className={`p-6 min-h-screen transition-colors ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Users", value: stats.totalUsers },
          { title: "Total Foods", value: stats.totalFoods },
          {
            title: "Available Foods",
            value: stats.availableFoods,
            color: "green",
          },
          { title: "Expired Foods", value: stats.expiredFoods, color: "red" },
        ].map((card, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl shadow ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p
              className={`text-2xl font-bold ${
                card.color === "green"
                  ? "text-green-500"
                  : card.color === "red"
                  ? "text-red-500"
                  : ""
              }`}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div
          className={`p-4 rounded-xl shadow ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">Food Status</h2>
          <Pie data={pieData} />
        </div>
        <div
          className={`p-4 rounded-xl shadow ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">Foods Added (Weekly)</h2>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Recent Foods */}
      <div className="mb-6 overflow-x-auto rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-2 p-4">Recent Foods</h2>
        <table
          className={`table w-full ${theme === "dark" ? "text-gray-100" : ""}`}
        >
          <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Added By</th>
            </tr>
          </thead>
          <tbody>
            {recentFoods.length > 0 ? (
              recentFoods.map((food, i) => (
                <tr
                  key={food._id}
                  className={
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }
                >
                  <td>{i + 1}</td>
                  <td>{food.food_name}</td>
                  <td>{food.food_qty}</td>
                  <td
                    className={
                      food.food_status === "Available"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {food.food_status}
                  </td>
                  <td>{food.donators_email || "Unknown"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No recent foods
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Recent Users */}
      <div className="overflow-x-auto rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-2 p-4">Recent Users</h2>
        <table
          className={`table w-full ${theme === "dark" ? "text-gray-100" : ""}`}
        >
          <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.length > 0 ? (
              recentUsers.map((user, i) => (
                <tr
                  key={user._id}
                  className={
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }
                >
                  <td>{i + 1}</td>
                  <td>{user.name || user.displayName}</td>
                  <td>{user.email}</td>
                  <td>{user.role || "user"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No recent users
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
