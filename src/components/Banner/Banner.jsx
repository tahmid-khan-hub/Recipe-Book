import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="relative bg-cover bg-center flex items-center justify-center text-white mt-5 max-w-[1380px] mx-auto min-h-[400px]"
      style={{
        backgroundImage: "url('https://i.ibb.co/Rkq1Rh0n/image.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15 z-0"></div>

      <div className="relative z-10 bg-opacity-60 p-8 rounded-xl max-w-2xl text-center my-10 md:my-40">
        <Fade>
          <h1 className="text-2xl md:text-[40px] font-bold mb-4 text-green-700">
            Welcome to Recipe Book App
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-600">
            Manage your recipes, explore others, and save your favorites easily — your personal cooking companion.
          </p>
        </Fade>

        <Link to="allrecipe"><button className="btn text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold">
          Get Started
        </button></Link>
      </div>
    </div>
  );
};

export default Banner;
