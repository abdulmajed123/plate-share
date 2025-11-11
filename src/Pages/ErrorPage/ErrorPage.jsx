import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
        <h1 className="text-7xl font-extrabold text-yellow-500 mb-4">
          {error?.status || 404}
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {error?.statusText || "Page Not Found"}
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          {error?.data ||
            "Sorry, the page you are looking for doesn’t exist or an unexpected error occurred."}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-yellow-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
