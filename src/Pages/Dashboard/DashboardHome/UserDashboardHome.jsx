// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../Provider/AuthContext";
// import Loading from "../../Loading/Loading";

// const COLORS = ["#22c55e", "#3b82f6", "#f97316"];

// const UserDashboardHome = () => {
//   const { user } = useContext(AuthContext);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user?.email) return;

//     fetch(
//       `https://plate-share-api-server-delta.vercel.app/user-dashboard/${user.email}`
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [user?.email]);

//   if (loading) return <Loading></Loading>;

//   if (!data)
//     return (
//       <p className="text-center mt-10 text-red-500 dark:text-red-400">
//         No data found
//       </p>
//     );

//   // Prepare Monthly Bar Chart Data
//   const monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   const monthlyData = Array(12).fill(0); // 12 months
//   data.recentFoods?.forEach((food) => {
//     const month = new Date(food.created_at).getMonth();
//     monthlyData[month]++;
//   });
//   const barData = monthlyData.map((value, idx) => ({
//     month: monthNames[idx],
//     foods: value,
//   }));

//   return (
//     <div className="p-6 space-y-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold">Dashboard Overview</h1>
//         <p className="text-gray-500 dark:text-gray-400 mt-1">
//           Track your food sharing activities and status
//         </p>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {[
//           {
//             icon: "🍱",
//             label: "Total Foods Added",
//             value: data.totalAdded ?? 0,
//           },
//           {
//             icon: "📥",
//             label: "Food Requests",
//             value: data.totalRequested ?? 0,
//           },
//           {
//             icon: "✅",
//             label: "Delivered Foods",
//             value:
//               data.chartData.find((i) => i.name === "Delivered")?.value ?? 0,
//           },
//           {
//             icon: "⏰",
//             label: "Expired Foods",
//             value: data.chartData.find((i) => i.name === "Expired")?.value ?? 0,
//           },
//         ].map((card, idx) => (
//           <div
//             key={idx}
//             className="bg-white dark:bg-gray-800 shadow rounded-2xl p-5 flex items-center gap-4 transition-colors duration-300"
//           >
//             <div className="text-4xl">{card.icon}</div>
//             <div>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {card.label}
//               </p>
//               <p className="text-2xl font-bold">{card.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pie Chart */}
//       <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 transition-colors duration-300">
//         <h2 className="text-xl font-semibold mb-2">Food Status Breakdown</h2>
//         <p className="text-gray-500 dark:text-gray-400 mb-4">
//           Visual distribution of your shared food status
//         </p>
//         {data.chartData?.length > 0 ? (
//           <div className="flex justify-center">
//             <PieChart width={380} height={300}>
//               <Pie
//                 data={data.chartData}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={120}
//                 dataKey="value"
//                 nameKey="name"
//                 label
//               >
//                 {data.chartData.map((_, idx) => (
//                   <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "var(--tw-bg-white)",
//                   color: "var(--tw-text-gray-900)",
//                 }}
//               />
//               <Legend wrapperStyle={{ color: "var(--tw-text-gray-900)" }} />
//             </PieChart>
//           </div>
//         ) : (
//           <p className="text-center text-gray-400 dark:text-gray-500">
//             No chart data available
//           </p>
//         )}
//       </div>

//       {/* Recent Foods Table */}
//       <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 transition-colors duration-300">
//         <h2 className="text-xl font-semibold mb-4">Recent Foods Added</h2>
//         {data.recentFoods?.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="table table-zebra w-full text-gray-900 dark:text-gray-100">
//               <thead className="bg-gray-100 dark:bg-gray-700">
//                 <tr>
//                   <th>#</th>
//                   <th>Food Name</th>
//                   <th>Qty</th>
//                   <th>Status</th>
//                   <th>Expire Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.recentFoods.map((food, idx) => (
//                   <tr key={food._id}>
//                     <th>{idx + 1}</th>
//                     <td>{food.food_name}</td>
//                     <td>{food.food_qty}</td>
//                     <td>{food.food_status}</td>
//                     <td>{new Date(food.expire_date).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-gray-400 dark:text-gray-500">
//             No recent foods found
//           </p>
//         )}
//       </div>

//       {/* Monthly Bar Chart */}
//       <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 transition-colors duration-300">
//         <h2 className="text-xl font-semibold mb-2">Monthly Foods Added</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={barData}
//             margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//           >
//             <CartesianGrid
//               strokeDasharray="3 3"
//               stroke={data ? "#e5e7eb" : "#374151"}
//             />
//             <XAxis dataKey="month" stroke="currentColor" />
//             <YAxis allowDecimals={false} stroke="currentColor" />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "var(--tw-bg-white)",
//                 color: "var(--tw-text-gray-900)",
//               }}
//             />
//             <Bar dataKey="foods" fill="#3b82f6" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default UserDashboardHome;

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import Loading from "../../Loading/Loading";

const COLORS = ["#22c55e", "#3b82f6", "#f97316"];

const UserDashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://plate-share-api-server-delta.vercel.app/user-dashboard/${user.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) return <Loading />;

  if (!data)
    return (
      <p className="text-center mt-10 text-red-500 dark:text-red-400">
        No data found
      </p>
    );

  // Prepare Monthly Bar Chart Data
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthlyData = Array(12).fill(0);
  data.recentFoods?.forEach((food) => {
    const month = new Date(food.created_at).getMonth();
    monthlyData[month]++;
  });
  const barData = monthlyData.map((value, idx) => ({
    month: monthNames[idx],
    foods: value,
  }));

  return (
    <div className="p-6 space-y-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Track your food sharing activities and status
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: "🍱",
            label: "Total Foods Added",
            value: data.totalAdded ?? 0,
          },
          {
            icon: "📥",
            label: "Food Requests",
            value: data.totalRequested ?? 0,
          },
          {
            icon: "✅",
            label: "Delivered Foods",
            value:
              data.chartData.find((i) => i.name === "Delivered")?.value ?? 0,
          },
          {
            icon: "⏰",
            label: "Expired Foods",
            value: data.chartData.find((i) => i.name === "Expired")?.value ?? 0,
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow rounded-2xl p-5 flex items-center gap-4 transition-colors duration-500"
          >
            <div className="text-4xl">{card.icon}</div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.label}
              </p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 transition-colors duration-500">
        <h2 className="text-xl font-semibold mb-2">Food Status Breakdown</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Visual distribution of your shared food status
        </p>
        {data.chartData?.length > 0 ? (
          <div className="flex justify-center">
            <PieChart width={380} height={300}>
              <Pie
                data={data.chartData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                nameKey="name"
                label
              >
                {data.chartData.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--tw-bg-white)",
                  color: "var(--tw-text-gray-900)",
                }}
              />
              <Legend wrapperStyle={{ color: "var(--tw-text-gray-900)" }} />
            </PieChart>
          </div>
        ) : (
          <p className="text-center text-gray-400 dark:text-gray-500">
            No chart data available
          </p>
        )}
      </div>

      {/* Recent Foods Table */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 transition-colors duration-500 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Recent Foods Added</h2>
        {data.recentFoods?.length > 0 ? (
          <table className="table-auto w-full text-gray-900 dark:text-gray-100">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Food Name</th>
                <th className="px-3 py-2">Qty</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Expire Date</th>
              </tr>
            </thead>
            <tbody>
              {data.recentFoods.map((food, idx) => (
                <tr
                  key={food._id}
                  className="even:bg-gray-50 dark:even:bg-gray-700 transition-colors duration-500"
                >
                  <td className="px-3 py-2">{idx + 1}</td>
                  <td className="px-3 py-2">{food.food_name}</td>
                  <td className="px-3 py-2">{food.food_qty}</td>
                  <td className="px-3 py-2">{food.food_status}</td>
                  <td className="px-3 py-2">
                    {new Date(food.expire_date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-400 dark:text-gray-500">
            No recent foods found
          </p>
        )}
      </div>

      {/* Monthly Bar Chart */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 transition-colors duration-500">
        <h2 className="text-xl font-semibold mb-2">Monthly Foods Added</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={barData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--tw-border-gray-300)" // works for light mode
            />
            <XAxis dataKey="month" stroke="currentColor" />
            <YAxis allowDecimals={false} stroke="currentColor" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--tw-bg-white)",
                color: "var(--tw-text-gray-900)",
              }}
            />
            <Bar dataKey="foods" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserDashboardHome;
