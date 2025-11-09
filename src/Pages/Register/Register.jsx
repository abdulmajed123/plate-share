import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
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
    console.log({ name, email, photoURL, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter Your Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter Your Email"
                />
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input"
                  placeholder="Photo URL"
                />
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Enter Your Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute top-7 right-2 z-50"
                  >
                    {show ? (
                      <FaRegEye size={24} />
                    ) : (
                      <FaRegEyeSlash size={24} />
                    )}
                  </span>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                {/* Google */}
                <button
                  onClick={handleSignInWithGoogle}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </fieldset>
              <p>
                Already have an Account?{" "}
                <Link to="/login" className="text-pink-700 text-md font-medium">
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
