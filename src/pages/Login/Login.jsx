import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "RecipeBook | Login";
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const { signIn, googleSignIn } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  if (loading) return <Loader></Loader>;

  const handleUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(password, email);

    signIn(email, password)
      .then((res) => {
        console.log(res);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Successfully Login",
          icon: "success",
          text: "Welcome!",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to Login",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Successfully Login",
          icon: "success",
          text: "Welcome!",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to Login",
        });
      });
  };

  return (
    <>
      <div
        data-aos="fade-up"
        className="card bg-base-100 w-11/12 max-w-sm mx-auto my-24 shrink-0 shadow-2xl border-1 border-green-600 hover:shadow-xl hover:shadow-green-600"
      >
        <div className="card-body ">
          <h1 className="text-3xl text-center mb-3 font-bold text-green-700">
            Login Now
          </h1>
          <form onSubmit={handleUser} className="fieldset">
            <label className="label text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="input text-gray-600"
              placeholder="Enter your email"
              required
            />
            <label className="label mt-2 text-gray-700">Password</label>
            <div className="flex relative text-gray-600">
              <input
                type={`${show ? "text" : "password"}`}
                className="input mb-3 border-1 border-gray-400"
                name="password"
                placeholder="Enter your Password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-7 top-2 cursor-pointer"
              >
                {show ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>
            <div className="mt-3">
              <a className="link link-hover text-gray-600">Forgot password?</a>
            </div>
            <button className="btn btn-neutral my-4 text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300">
              Login
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="btn text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300"
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
          </form>
        </div>
        <p className="ml-7 mb-9 text-gray-600">
          New to this site?{" "}
          <Link className="text-green-700 font-bold" to="/register">
            Click here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
