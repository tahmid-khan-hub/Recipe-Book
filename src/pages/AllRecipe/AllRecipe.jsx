import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const AllRecipe = () => {
  const allRecipeData = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "RecipeBook | AllRecipe"
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const cuisineOptions = [
    "All",
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Others",
  ];

  const filteredRecipes =
    selectedCuisine === "All"
      ? allRecipeData
      : allRecipeData.filter(
          (recipe) =>
            recipe.cuisineType.toLowerCase() === selectedCuisine.toLowerCase()
        );

  return (
    <div className="p-6">
      <h1 className="text-3xl text-orange-800 font-semibold text-center mt-8 mb-3">
        Explore Our Delicious Recipes
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Welcome to our recipe collection! Here you'll find a diverse range of
        culinary creations...
      </p>

      {/* Dropdown */}
      <div className="flex justify-center mb-10">
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="px-4 py-2 border border-green-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 "
        >
          {cuisineOptions.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            data-aos="flip-right"
            key={recipe._id}
            className="bg-white rounded-2xl overflow-hidden p-4 flex flex-col border-1 border-green-600 shadow-md hover:shadow-md hover:shadow-green-600"
          >
            <img
              src={recipe.photoURL}
              alt={recipe.title}
              className="rounded-xl h-40 w-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 text-orange-800">
              {recipe.title}
            </h2>
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
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;
