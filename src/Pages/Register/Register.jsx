import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signInWithGoogle } = use(AuthContext);
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 1 uppercase, 1 lowercase and be at least 6 characters long."
      );

      return;
    }
    console.log({ name, email, photoURL, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL || "https://example.com/default-avatar.png",
        });
        console.log(user);
        Navigate("/");
        toast.success(" User Create Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Navigate("/");
        toast.success(" User Login Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 dark:bg-black min-h-screen transition-colors duration-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 dark:bg-gray-800 dark:text-gray-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
              Register Now!
            </h1>

            <form onSubmit={handleRegister}>
              <fieldset className="fieldset space-y-3">
                {/* Name */}
                <div>
                  <label className="label text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                {/* PhotoURL */}
                <div>
                  <label className="label text-gray-700 dark:text-gray-300">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Photo URL"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="label text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter Your Password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute top-7 right-3 cursor-pointer text-gray-600 dark:text-gray-300"
                  >
                    {show ? (
                      <FaRegEye size={22} />
                    ) : (
                      <FaRegEyeSlash size={22} />
                    )}
                  </span>
                </div>

                <div className="text-right">
                  <a className="link link-hover text-gray-600 dark:text-gray-400">
                    Forgot password?
                  </a>
                </div>

                {/* Register Button */}
                <button className="btn w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold mt-4 hover:opacity-90">
                  Register
                </button>

                {/* Google Login */}
                <button
                  onClick={handleSignInWithGoogle}
                  type="button"
                  className="btn w-full bg-white text-black border border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 hover:opacity-90"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="mr-2"
                  >
                    <g>
                      <path fill="#fff" d="m0 0H512V512H0" />
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      />
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      />
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      />
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      />
                    </g>
                  </svg>
                  Login with Google
                </button>
              </fieldset>

              <p className="text-md text-gray-700 dark:text-gray-300 mt-3 text-center">
                Already have an Account?{" "}
                <Link to="/login" className="text-pink-600 dark:text-pink-400">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
