import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const MyRecipe = () => {
  const { user } = use(AuthContext);
  const [myRecipe, setMyRecipe] = useState([]);

  const Allrecipe = useLoaderData();

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
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-4">My Recipes</h2>

        {myRecipe.length > 0 ? (
          <ul className="space-y-4">
            {myRecipe.map((recipe) => (
              <li key={recipe._id} className="p-4 shadow rounded bg-white">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <p>{recipe.cuisineType}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You haven't added any recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyRecipe;
