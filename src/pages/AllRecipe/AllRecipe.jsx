import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const AllRecipe = () => {
  const allRecipeData = useLoaderData();

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init({
        duration: 1000,
        once: false,
    });
  }, [])

  return (
    <div  className="p-6">
      <h1 className="text-3xl text-orange-800 font-semibold text-center mt-8 mb-3">Explore Our Delicious Recipes</h1>
      <p className="text-gray-500 text-center mb-11">Welcome to our recipe collection! Here you'll find a diverse range of culinary   creations, from quick and easy meals to more elaborate dishes perfect for any occasion. Browse through our categories to discover new favorites and expand your cooking repertoire. We're constantly adding new recipes, so be sure to check back often for fresh inspiration!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allRecipeData.map((recipe) => (
          <div data-aos="flip-right"
            key={recipe._id}
            className="bg-white rounded-2xl overflow-hidden p-4 flex flex-col border-1 border-green-600 shadow-md hover:shadow-md hover:shadow-green-600"
          >
            <img
              src={recipe.photoURL}
              alt={recipe.title}
              className="rounded-xl h-40 w-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 text-orange-800">{recipe.title}</h2>
            <p className="text-sm text-gray-600 my-1">
              <strong>Cuisine:</strong> {recipe.cuisineType}
            </p>
            <p className="text-sm text-gray-600 my-1">
              <strong>Prep Time:</strong> {recipe.prepTime} mins
            </p>
            <p className="text-sm text-gray-600 my-1">
              <strong>Categories:</strong> {recipe.categories}
            </p>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2 mt-1">
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <Link to={`/recipeDetails/${recipe._id}`}>
             <button className="mt-6 px-4 py-2 text-white rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition border-1 border-orange-800 shadow-md shadow-orange-300">
              See Details
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;
