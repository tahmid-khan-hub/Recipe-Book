import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const TopRecipe = ({ recipeData }) => {
  console.log(recipeData);

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);

  const topRecipes = [...recipeData]
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 6);

  return (
    <div>
      <div className="p-4 mt-24">
        <h2 className="text-2xl text-center text-orange-800 font-semibold mb-4">
          Top Recipes
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Discover our most popular and mouthwatering recipes! From quick
          weeknight dinners to impressive weekend feasts, these top-rated dishes
          are guaranteed to become your new favorites. Browse through our
          collection and find inspiration for your next culinary adventure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topRecipes.map((recipe) => (
            <div
              data-aos="flip-down"
              key={recipe._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={recipe.photoURL}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-orange-800 font-bold">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  Cuisine: {recipe.cuisineType}
                </p>
                <p className="text-gray-800 mt-2 font-medium">
                  Likes: {recipe.likeCount}
                </p>
                <div className="relative h-full mt-[80px]">
                  <Link to={`/recipeDetails/${recipe._id}`}><button className="absolute bottom-4 right-4 px-4 py-2 rounded-md text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300 ">
                    View Details
                  </button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
        <div className="w-[110px] mt-3 mx-auto">
          <Link to="/allrecipe">
          <button className="btn text-white bg-gradient-to-r from-orange-500 to-orange-600 bg-orange-500 rounded-xl hover:bg-orange-600 hover:from-orange-600 hover:to-orange-700 border-orange-800 shadow-md shadow-orange-300">All Recipes</button>
          </Link>
        </div>
      
    </div>
  );
};

export default TopRecipe;
