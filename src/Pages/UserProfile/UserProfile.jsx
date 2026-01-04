// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../Provider/AuthContext";
// import { updateProfile } from "firebase/auth";
// import { auth } from "../../firebase/firebase.config";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaUserEdit, FaImage } from "react-icons/fa";
// import Loading from "../Loading/Loading";

// const UserProfile = () => {
//   const { user } = useContext(AuthContext);
//   const [name, setName] = useState(user?.displayName || "");
//   const [photo, setPhoto] = useState(user?.photoURL || "");
//   const [loading, setLoading] = useState(false);

//   const handleUpdateProfile = async () => {
//     if (!name || !photo) {
//       return toast.error("Name and Image URL required");
//     }

//     try {
//       setLoading(true);
//       await updateProfile(auth.currentUser, {
//         displayName: name,
//         photoURL: photo,
//       });
//       toast.success("Profile updated successfully");
//     } catch (error) {
//       toast.error("Profile update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <Loading />;

//   return (
//     <div className="p-6 max-w-5xl mx-auto space-y-10 min-h-screen">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* ===== Header ===== */}
//       <div className="relative bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-8 text-white shadow-xl">
//         <div className="flex flex-col sm:flex-row items-center gap-6">
//           <img
//             src={
//               photo || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
//             }
//             alt="Profile"
//             className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
//           />
//           <div>
//             <h2 className="text-3xl font-bold">{name || "User Name"}</h2>
//             <p className="opacity-90 text-sm">{user?.email}</p>
//             <span className="inline-flex items-center mt-3 px-4 py-1 rounded-full bg-white/20 text-sm">
//               User
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ===== Edit Profile ===== */}
//       <div
//         className={`rounded-2xl shadow-xl p-8 space-y-6 transition-colors duration-300 ${
//           document.documentElement.classList.contains("dark")
//             ? "bg-gray-900 text-gray-100"
//             : "bg-white text-gray-900"
//         }`}
//       >
//         <h3 className="text-xl font-semibold flex items-center gap-2">
//           <FaUserEdit /> Edit Profile
//         </h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           {/* Name */}
//           <div>
//             <label className="label font-medium">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={`input input-bordered w-full rounded-lg transition-colors duration-300 ${
//                 document.documentElement.classList.contains("dark")
//                   ? "bg-gray-800 text-gray-100 border-gray-600"
//                   : ""
//               }`}
//               placeholder="Your Name"
//             />
//           </div>

//           {/* Profile Image URL */}
//           <div>
//             <label className="label font-medium flex items-center gap-2">
//               <FaImage /> Profile Image URL
//             </label>
//             <input
//               type="text"
//               value={photo}
//               onChange={(e) => setPhoto(e.target.value)}
//               className={`input input-bordered w-full rounded-lg transition-colors duration-300 ${
//                 document.documentElement.classList.contains("dark")
//                   ? "bg-gray-800 text-gray-100 border-gray-600"
//                   : ""
//               }`}
//               placeholder="https://image-url.com/photo.jpg"
//             />
//           </div>
//         </div>

//         <button
//           onClick={handleUpdateProfile}
//           disabled={loading}
//           className="btn w-full md:w-auto mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white border-0 hover:from-red-500 hover:to-pink-500 transition-colors duration-300"
//         >
//           {loading ? "Updating..." : "Update Profile"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserEdit, FaImage } from "react-icons/fa";
import Loading from "../Loading/Loading";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    if (!name || !photo) return toast.error("Name and Image URL required");
    try {
      setLoading(true);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* ===== Cover Banner ===== */}
      <div className="relative w-full h-60">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
          alt="Banner"
          className="w-full h-full object-cover rounded-b-3xl brightness-90"
        />
        {/* Profile Image */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
          <img
            src={
              photo || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="User"
            className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* ===== Name + Email + Role ===== */}
      <div className="mt-20 text-center space-y-2">
        <h2 className="text-3xl font-bold">{name || "User Name"}</h2>
        <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center gap-2">
          {user?.email}
        </p>
        <span className="inline-flex items-center mt-2 px-4 py-1 rounded-full bg-pink-500 dark:bg-pink-600 text-white font-medium shadow-lg">
          User
        </span>
      </div>

      {/* ===== Edit Profile Card ===== */}
      <div className="max-w-4xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 space-y-6 transition-colors duration-300">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <FaUserEdit /> Edit Profile
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {/* Name */}
          <div>
            <label className="label font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-pink-500 transition"
              placeholder="Your Name"
            />
          </div>

          {/* Profile Image URL */}
          <div>
            <label className="label font-medium flex items-center gap-2">
              <FaImage /> Profile Image URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="https://image-url.com/photo.jpg"
              className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>
        </div>

        <button
          onClick={handleUpdateProfile}
          disabled={loading}
          className="w-full  mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold hover:from-red-500 hover:to-pink-500 transition disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
