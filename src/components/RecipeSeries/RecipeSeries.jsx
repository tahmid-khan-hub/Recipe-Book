import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fade } from "react-awesome-reveal";

const RecipeSeries = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const recipeSeries = [
    {
      id: 1,
      title: "Chinese Food Delights",
      description:
        "Explore classic and modern Chinese dishes—from dumplings to stir-fries. Learn regional variations, uncover ancient culinary traditions, and master wok techniques.",
      thumbnail: "https://i.ibb.co/DPPchwG3/image.png",
      days: 6,
    },
    {
      id: 2,
      title: "South Indian Dishes",
      description:
        "Discover authentic recipes from Kerala, Tamil Nadu, and beyond with bold flavors. Dive into rich curries, dosa delights, aromatic spices, and age-old cooking secrets.",
      thumbnail: "https://i.ibb.co/8gwhrVkK/image.png",
      days: 7,
    },
    {
      id: 3,
      title: "Mexican Fiesta",
      description:
        "Enjoy tacos, enchiladas, and vibrant Mexican flavors over 5 spicy days. Celebrate with salsas, street snacks, festive cooking styles, and colorful ingredients.",
      thumbnail: "https://i.ibb.co/ZzhYtX6Z/image.png",
      days: 5,
    },
  ];

  return (
    <section className="py-10 px-4  my-24">
      <Fade>
        <h2 className="text-2xl text-center text-orange-800 font-bold mb-4 mt-2">
          Recipe Series & Mini Courses
        </h2>
        <p className="text-center text-orange-800 mb-7">
          Explore a variety of cooking journeys—from quick mini courses to
          deep-dive recipe series that bring global flavors to your kitchen.
        </p>
      </Fade>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {recipeSeries.map((series) => (
          <div
            key={series.id}
            className="bg-white rounded-xl p-2 border-1 border-green-600 shadow-md shadow-green-400 transition"
          >
            <img
              src={series.thumbnail}
              alt={series.title}
              className="w-full h-[250px] object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg text-orange-800 font-bold text-center">
              {series.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-left">
              {series.description}
            </p>
            <p className="mt-3 mb-5 text-gray-500">
              <span className="font-bold">Duration</span>: {series.days} Days
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeSeries;
