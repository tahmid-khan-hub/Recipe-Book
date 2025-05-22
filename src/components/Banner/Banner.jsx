import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div data-aos="fade-up"
      className="w-full bg-cover bg-center flex items-center justify-center text-white mt-9"
      style={{
        backgroundImage: "url('https://i.ibb.co/Rkq1Rh0n/image.png')",
      }}
    >
      <div className="text-green-700 bg-opacity-60 p-8 rounded-xl max-w-2xl text-center my-0 md:my-40">
        <Fade>
          <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Book App</h1>
          <p className="text-lg mb-6">
          Manage your recipes, explore others, and save your favorites easily — your personal cooking companion.
        </p>
        </Fade>
        
        <button className="btn text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
