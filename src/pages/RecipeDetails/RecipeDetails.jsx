import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const RecipeDetails = () => {
  const id = useParams();
  const data = useLoaderData();

  const recipe = data.find((r) => r._id.toString() == id.id);
  console.log(recipe);

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 mt-16 mb-24">
        <p className="text-center text-lg font-medium mb-11 text-orange-700">
          {recipe.likeCount} people interested in this recipe
        </p>

        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">{recipe.title}</h2>

        <img
          src={recipe.photoURL}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        {/* <p className="text-center text-lg font-medium mb-4 text-indigo-600">
          {recipe.likeCount} people interested in this recipe
        </p> */}

        <div className="text-center mb-6">
          <button
            className=" text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300 font-semibold py-2 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <FaThumbsUp /> Like
          </button>
        </div>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">Categories:</span>{" "}
            {recipe.categories}
          </p>
          <p>
            <span className="font-semibold">Cuisine:</span> {recipe.cuisineType}
          </p>
          <p>
            <span className="font-semibold">Prep Time:</span> {recipe.prepTime}{" "}
            minutes
          </p>

          <div>
            <p className="font-semibold">Ingredients:</p>
            <pre className="bg-gray-100 rounded p-2 whitespace-pre-wrap">
              {recipe.ingredients}
            </pre>
          </div>

          <div>
            <p className="font-semibold">Instructions:</p>
            <pre className="bg-gray-100 rounded p-2 whitespace-pre-wrap">
              {recipe.instructions}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
