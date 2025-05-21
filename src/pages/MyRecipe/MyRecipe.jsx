import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";

const MyRecipe = () => {
  const { user } = use(AuthContext);
  const [myRecipe, setMyRecipe] = useState([]);

  const Allrecipe = useLoaderData();

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);

  useEffect(() => {
    if (user?.email && Allrecipe?.length > 0) {
      const filtered = Allrecipe.filter(
        (recipe) => recipe.userEmail === user.email
      );
      setMyRecipe(filtered);
    }
  }, [user, Allrecipe]);
  return (
    <div>
      <div data-aos="fade-up" className="my-10 px-4 md:px-10 ">
        <h2 className="text-3xl font-bold mb-6 text-orange-800 text-center">
          My Recipes
        </h2>

        {myRecipe.length > 0 ? (
          <div className="space-y-6 max-w-5xl mx-auto">
            {myRecipe.map((recipe) => (
              <div
                key={recipe._id}
                className="flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden"
              >
                {/* Left: Image */}
                <img
                  src={recipe.photoURL}
                  alt={recipe.title}
                  className="w-full md:w-64 h-60 object-cover mr-5 p-1 rounded-xl"
                />

                {/* Right: Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <Fade>
                        <h3 className="text-2xl font-bold text-green-800 mb-7">
                        {recipe.title}
                    </h3>
                    </Fade>
                    <p className="text-sm text-gray-600">
                      <strong>Cuisine:</strong> {recipe.cuisineType} |{" "}
                      <strong>Prep Time:</strong> {recipe.prepTime} min
                    </p>

                    <div className="mt-2 text-sm text-gray-700">
                      <p>
                        <strong>Ingredients:</strong> {recipe.ingredients}
                      </p>
                      <p className="my-3">
                        <strong>Instructions:</strong> {recipe.instructions}
                      </p>
                      <p className="mt-1">
                        <strong>Categories:</strong>{" "}
                        {Array.isArray(recipe.categories)
                          ? recipe.categories.join(", ")
                          : recipe.categories}
                      </p>
                      <p className="mt-1">
                        <strong>❤️ Likes:</strong> {recipe.likeCount}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button className="px-4 py-1 rounded text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300 text-sm">
                      Update
                    </button>
                    <button className="px-4 py-1 rounded text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-800 shadow-md shadow-red-300 text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            You haven't added any recipes yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyRecipe;
