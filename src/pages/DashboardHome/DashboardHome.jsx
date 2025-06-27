import React, { use, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData } from "react-router";
import { FaUtensils, FaUserAlt, FaThumbsUp  } from "react-icons/fa";
import Lottie from "lottie-react";
import NoMyRecipe from "../../assets/lotties/NoMyRecipe.json";
import AOS from "aos";
import "aos/dist/aos.css";

const DashboardHome = () => {
  const { user } = use(AuthContext);
  const recipeData = useLoaderData();

  const userEmail = user?.email;
  const userRecipe = recipeData.filter(
    (recipe) => recipe.userEmail === userEmail
  );

  const recentRecipes = [...userRecipe].reverse().slice(0, 5);

  useEffect(() => {
    document.title = "RecipeBook | DashBoard";
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="p-4 space-y-10">
      {/* User Info Section */}
      <div className=" gap-4 bg-white shadow-md rounded-xl p-4 border-l-4 border-gray-600 justify-center items-center">
        <div className="flex justify-center items-center mt-3">
          <img
            src={user.photoURL}
            alt="User"
            className="w-16 h-16 rounded-full border-2 border-green-400"
          />
        </div>
        <div className="text-center mb-3">
          <h2 className="text-2xl text-orange-800 font-bold">
            {user?.displayName}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500 transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <FaUtensils className="text-4xl text-green-600" />
            <div>
              <h3 className="text-lg font-semibold">Total Recipes</h3>
              <p className="text-2xl text-green-600">{recipeData.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500 transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <FaUserAlt className="text-4xl text-green-500" />
            <div>
              <h3 className="text-lg font-semibold">My Recipes</h3>
              <p className="text-2xl text-green-600">{userRecipe.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500 transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <FaThumbsUp  className="text-4xl text-green-500" />
            <div>
              <h3 className="text-lg font-semibold">Total Likes</h3>
              <p className="text-2xl text-green-600">
                {userRecipe.reduce(
                  (sum, recipe) => sum + (recipe.likeCount || 0),
                  0
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Added Recipes */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-3xl font-bold text-orange-800 mb-7">
          Recently Added Recipes
        </h3>

        {recentRecipes.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto border">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-2 px-4 border">#</th>
                  <th className="py-2 px-4 border">Recipe Name</th>
                  <th className="py-2 px-4 border">Category</th>
                  <th className="py-2 px-4 border">Like Count</th>
                </tr>
              </thead>
              <tbody>
                {recentRecipes.map((recipe, index) => (
                  <tr key={recipe._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border">{index + 1}</td>
                    <td className="py-2 px-4 border">{recipe.title}</td>
                    <td className="py-2 px-4 border">{recipe.categories}</td>
                    <td className="py-2 px-4 border">{recipe.likeCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-4 mb-11 text-center flex flex-col items-center justify-center">
            <div className="w-72 h-72">
              <Lottie animationData={NoMyRecipe} loop />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 ">
              No Recipe added recently.
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              You can add your own recipe in Add Recipe page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
