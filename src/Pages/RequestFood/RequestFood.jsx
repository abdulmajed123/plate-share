import React, { useState, useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";

const RequestFood = () => {
  const { user } = useContext(AuthContext);
  const serverUrl = "https://plate-share-api-server-delta.vercel.app";

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchRequests = async (query = "") => {
    setLoading(true);
    try {
      const url = query
        ? `${serverUrl}/request-food?q=${query}`
        : `${serverUrl}/request-food`;
      const res = await fetch(url);
      const data = await res.json();
      setRequests(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Failed to fetch requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchRequests(search);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  if (loading) return <Loading />;

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 space-y-6">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
        Food Requests
      </h2> */}

      {/* Search */}
      <div className="flex justify-center md:justify-end mb-6">
        <input
          type="text"
          placeholder="Search by name, email, status, location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full md:w-1/3 px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
      </div>

      {/* Requests */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.length > 0 ? (
          requests.map((req) => (
            <div
              key={req._id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transition"
            >
              <div className="space-y-3">
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{req.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {req.email}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      Food ID:
                    </p>
                    <p className="text-sm">{req.foodId}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      Location:
                    </p>
                    <p className="text-sm">{req.location}</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    Reason:
                  </p>
                  <p className="text-sm">{req.reason}</p>
                </div>

                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    Contact:
                  </p>
                  <p className="text-sm">{req.contact}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full font-semibold text-sm ${
                    req.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {req.status}
                </span>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {new Date(req.requestDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center py-6 text-gray-500 dark:text-gray-400">
            No requests found
          </p>
        )}
      </div>
    </div>
  );
};

export default RequestFood;
