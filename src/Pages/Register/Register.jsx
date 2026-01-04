import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const API_URL = "https://plate-share-api-server-delta.vercel.app";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const saveUserToDB = async (userInfo) => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      const text = await res.text();
      if (!text.startsWith("<")) JSON.parse(text);
    } catch (error) {
      console.error("Save user failed:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain 1 uppercase, 1 lowercase and 6 characters"
      );
      return;
    }

    try {
      const result = await createUser(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL || "https://i.ibb.co/2d9Z8Zp/default-user.png",
      });

      await saveUserToDB({
        name,
        email,
        photo: photoURL || "https://i.ibb.co/2d9Z8Zp/default-user.png",
        role: "user",
      });

      toast.success("User registered successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      await saveUserToDB({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: "user",
      });

      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
          Register
        </h1>

        <form onSubmit={handleRegister} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            required
          />

          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL "
            className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600 dark:text-gray-300"
            >
              {show ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          <button className="btn w-full bg-gradient-to-r from-pink-500 to-red-500 text-white border-0 hover:opacity-90">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full mt-3 bg-white dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
