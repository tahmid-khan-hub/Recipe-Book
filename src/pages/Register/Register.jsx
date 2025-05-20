import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-11/12 max-w-sm mx-auto my-24 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center mb-3 font-bold text-green-700">
          Register
        </h1>
        <fieldset className="fieldset">
          <label className="label mt-2 text-gray-400">Name</label>
          <input type="text" className="input text-gray-500" placeholder="Enter your name" />
          <label className="label mt-2 text-gray-400">Email</label>
          <input type="email" className="input text-gray-500" placeholder="Email" />
          <label className="label mt-2 text-gray-400">PhotoURL</label>
          <input type="text" className="input text-gray-500" placeholder="Enter your PhotoURL" />
          <label className="label mt-2 text-gray-400">Password</label>
          <input type="password" className="input text-gray-500" placeholder="Password" />
       
          <button className="btn btn-neutral my-4 mt-7">Register</button>
          <button className="btn bg-white border-2 border-gray-400 text-black">
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
            Register with Google
          </button>
        </fieldset>
      </div>
      <p className="text-gray-600 ml-7 mb-12">Already have an account? <Link className="text-green-700 font-bold" to="/login">Click here</Link></p>
    </div>
  );
};

export default Register;
