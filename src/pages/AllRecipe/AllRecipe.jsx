import React, { useEffect } from "react";
import { useLoaderData } from "react-router";

const AllRecipe = () => {
  const allRecipeData = useLoaderData();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allRecipeData.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col"
          >
            <img
              src={recipe.photoURL}
              alt={recipe.title}
              className="rounded-xl h-40 w-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
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
            <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;
