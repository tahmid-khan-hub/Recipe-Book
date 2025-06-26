import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fade } from "react-awesome-reveal";

const IngredientOfWeek = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
    });
  }, []);

  const ingredient = {
    name: "Soy Sauce",
    image: "https://i.ibb.co/HLzjCF5d/image.png",
    description:
      "Soy sauce is a staple in Chinese cuisine, adding rich umami flavor to stir-fries, marinades, and dipping sauces. It's a must-have for depth and saltiness.",
    recipes: [
      {
        id: 1,
        title: "Soy Sauce Fried Rice",
        image: "https://i.ibb.co/pv6WYZsc/image.png",
      },
      {
        id: 2,
        title: "Chicken Dumplings with Soy Dip",
        image: "https://i.ibb.co/9mRSHyyN/image.png",
      },
      {
        id: 3,
        title: "Stir-fried Noodles",
        image: "https://i.ibb.co/QS1yk13/image.png",
      },
    ],
  };
  return (
    <section className="py-10 px-4 mt-24 ">
      <Fade>
        <h2 className="text-3xl font-bold mb-6 text-orange-800">
        Ingredient of the Week: {ingredient.name}
      </h2>
      </Fade>
      <div data-aos="zoom-out" className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={ingredient.image}
          alt={ingredient.name}
          className="w-40 h-40 object-cover rounded-full shadow"
        />
        <p className="text-gray-500 text-lg max-w-xl">
          {ingredient.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredient.recipes.map((recipe) => (
          <div
            data-aos="zoom-in"
            key={recipe.id}
            className="bg-white rounded-xl shadow-md shadow-green-400 p-4 transition border-1 border-green-600"
          >
            <h3 className="text-lg font-bold mb-2 text-orange-800">{recipe.title}</h3>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-[250px] object-cover rounded-lg mb-3"
            />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default IngredientOfWeek;
