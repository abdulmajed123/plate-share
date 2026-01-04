// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import Loading from "../../Loading/Loading";

// const ManageUser = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const serverUrl = " https://plate-share-api-server-delta.vercel.app";

//   useEffect(() => {
//     fetch(`${serverUrl}/users`)
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   const handleRoleChange = (id, role) => {
//     fetch(`${serverUrl}/users/role/${id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({ role }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           const updated = users.map((user) =>
//             user._id === id ? { ...user, role } : user
//           );
//           setUsers(updated);
//           toast.success("User Role Update Successfully");
//         } else {
//           toast.error("Role update failed ❌");
//         }
//       })
//       .catch(() => {
//         toast.error("Something went wrong!");
//       });
//   };

//   if (loading) {
//     return <Loading></Loading>;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6">Manage Users</h2>

//       <div className="overflow-x-auto bg-white rounded-xl shadow">
//         <table className="table">
//           <thead className="bg-gray-100">
//             <tr>
//               <th>#</th>
//               <th>User</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index + 1}</td>

//                 <td className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="w-10 rounded-full">
//                       <img
//                         src={
//                           user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"
//                         }
//                         alt="user"
//                       />
//                     </div>
//                   </div>
//                   <span className="font-semibold">
//                     {user.name || user.displayName}
//                   </span>
//                 </td>

//                 <td>{user.email}</td>

//                 <td>
//                   <span
//                     className={`badge ${
//                       user.role === "admin" ? "badge-error" : "badge-success"
//                     }`}
//                   >
//                     {user.role || "user"}
//                   </span>
//                 </td>

//                 <td className="text-center">
//                   {user.role !== "admin" ? (
//                     <button
//                       onClick={() => handleRoleChange(user._id, "admin")}
//                       className="btn btn-xs btn-error"
//                     >
//                       Make Admin
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleRoleChange(user._id, "user")}
//                       className="btn btn-xs btn-outline"
//                     >
//                       Remove Admin
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUser;

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Loading/Loading";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const serverUrl = "https://plate-share-api-server-delta.vercel.app";

  // Fetch users
  useEffect(() => {
    fetch(`${serverUrl}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  // Handle role change
  const handleRoleChange = (id, role) => {
    fetch(`${serverUrl}/users/role/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updated = users.map((user) =>
            user._id === id ? { ...user, role } : user
          );
          setUsers(updated);
          toast.success(`User role changed to ${role.toUpperCase()}`);
        } else {
          toast.error("Role update failed ❌");
        }
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-3xl font-bold mb-6">Manage Users</h2>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow transition-colors duration-300">
        <table className="table w-full">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td>{index + 1}</td>

                <td className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt="user"
                      />
                    </div>
                  </div>
                  <span className="font-semibold">
                    {user.name || user.displayName}
                  </span>
                </td>

                <td>{user.email}</td>

                <td>
                  <span
                    className={`badge ${
                      user.role === "admin"
                        ? "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                        : "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                    }`}
                  >
                    {user.role || "user"}
                  </span>
                </td>

                <td className="text-center">
                  {user.role !== "admin" ? (
                    <button
                      onClick={() => handleRoleChange(user._id, "admin")}
                      className="btn btn-xs bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-600 transition"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRoleChange(user._id, "user")}
                      className="btn btn-xs btn-outline dark:border-gray-400 dark:text-gray-200"
                    >
                      Remove Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
