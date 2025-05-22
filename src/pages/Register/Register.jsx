import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";

const Register = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const { newUser, googleSignIn } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  if(loading) return <Loader></Loader>;

  const handleNewUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain 6 characters",
      });
      return;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have Uppercase and Lowercase letter.",
      });
      return;
    }

    newUser(email, password)
      .then((res) => {
        const createdUser = res.user;

        if (!name || !photo) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Name and Photo URL cannot be empty.",
          });
          return;
        }

        updateProfile(createdUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            navigate("/");
            Swal.fire({
              title: "Registration Successful!",
              icon: "success",
              text: "Welcome!",
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to update profile",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already have an account",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Registration successful",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to register",
        });
      });
  };

  return (
    <div
      data-aos="fade-up"
      className="card bg-base-100 w-11/12 max-w-sm mx-auto my-24 shrink-0 shadow-2xl border-1 border-green-600 hover:shadow-xl hover:shadow-green-600"
    >
      <div className="card-body">
        <h1 className="text-3xl text-center mb-3 font-bold text-green-700">
          Register
        </h1>
        <form onSubmit={handleNewUser} className="fieldset">
          <label className="label mt-2 text-green-700">Name</label>
          <input
            type="text"
            className="input text-green-700"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label className="label mt-2 text-green-700">Email</label>
          <input
            type="email"
            className="input text-green-700"
            name="email"
            placeholder="Email"
            required
          />
          <label className="label mt-2 text-green-700">PhotoURL</label>
          <input
            type="text"
            className="input text-green-700"
            name="photo"
            placeholder="Enter your PhotoURL"
            required
          />
          <label className="label mt-2 text-green-700">Password</label>
          <input
            type="password"
            className="input text-green-700"
            name="password"
            placeholder="Password"
            required
          />

          <button className="btn btn-neutral my-4 mt-7 text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300">
            Register
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
            Register with Google
          </button>
        </form>
      </div>
      <p className="text-gray-600 ml-7 mb-12">
        Already have an account?{" "}
        <Link className="text-green-700 font-bold" to="/login">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default Register;
