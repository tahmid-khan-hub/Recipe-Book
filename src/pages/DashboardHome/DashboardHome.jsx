import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData } from "react-router";

const DashboardHome = () => {
  const { user } = use(AuthContext)
  const recipeData = useLoaderData();
  const userEmail = user.email;

  const userRecipe = recipeData.filter(recipe => recipe.userEmail == userEmail)

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Welcome, {user.displayName} 👋</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Cards */}
        <div className="bg-white shadow rounded-lg p-5 border-l-4 border-green-500">
          <h3 className="text-xl font-semibold">Total Recipes</h3>
          <p className="text-3xl text-green-600">{recipeData.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5 border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold">My Recipes</h3>
          <p className="text-3xl text-orange-600">{userRecipe.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold">Something Else</h3>
          <p className="text-3xl text-blue-600">--</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
