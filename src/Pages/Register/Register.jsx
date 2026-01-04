import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const API_URL = " https://plate-share-api-server-delta.vercel.app";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // Save user to MongoDB (SAFE VERSION)
  const saveUserToDB = async (userInfo) => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const text = await res.text();
      if (text.startsWith("<")) {
        console.error("Server returned HTML, not JSON");
        return;
      }

      const data = JSON.parse(text);
      console.log("User saved to MongoDB:", data);
    } catch (error) {
      console.error("Save user failed:", error);
    }
  };

  //  Email/Password Register
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

      // update firebase profile
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL || "https://i.ibb.co/2d9Z8Zp/default-user.png",
      });

      // MongoDB user object
      const userInfo = {
        name,
        email,
        photo: photoURL || "https://i.ibb.co/2d9Z8Zp/default-user.png",
        role: "user",
      };

      await saveUserToDB(userInfo);

      toast.success("User registered successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  //  Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      const userInfo = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: "user",
      };

      await saveUserToDB(userInfo);

      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Register</h1>

            <form onSubmit={handleRegister} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />

              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL "
                className="input input-bordered w-full"
              />

              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  {show ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              <button className="btn btn-primary w-full">Register</button>
            </form>

            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full mt-2"
            >
              Continue with Google
            </button>

            <p className="text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
