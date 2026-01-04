import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaUserShield, FaEnvelope, FaImage, FaUser } from "react-icons/fa";
import Loading from "../Loading/Loading";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateAdmin = async () => {
    if (!name || !photo) return toast.error("Name & Photo URL required");
    try {
      setLoading(true);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* ===== Cover Banner ===== */}
      <div className="relative w-full h-60 bg-gradient-to-r from-indigo-600 to-purple-600">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
          alt="Banner"
          className="w-full h-full object-cover rounded-b-2xl brightness-90"
        />

        {/* Profile Image */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
          <img
            src={
              photo || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Admin"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      {/* ===== Name + Email + Role ===== */}
      <div className="mt-20 text-center space-y-2">
        <h2 className="text-3xl font-bold">{name || "Admin Name"}</h2>
        <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center gap-2">
          <FaEnvelope /> {user?.email}
        </p>
        <span className="inline-flex items-center gap-2 mt-2 px-4 py-1 rounded-full bg-indigo-600 text-white font-medium shadow-lg">
          <FaUserShield /> Super Admin
        </span>
      </div>

      {/* ===== Update Profile Form ===== */}
      <div className="max-w-4xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
        <h3 className="text-2xl font-semibold mb-6">Update Profile</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold flex items-center gap-2 mb-1">
              <FaUser /> Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="input input-bordered w-full rounded-xl bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 cursor-not-allowed border border-gray-300 dark:border-gray-600 transition"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-semibold flex items-center gap-2 mb-1">
              <FaImage /> Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="https://image-url.com"
              className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
        </div>

        <button
          onClick={handleUpdateAdmin}
          disabled={loading}
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:from-purple-600 hover:to-indigo-600 transition disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
