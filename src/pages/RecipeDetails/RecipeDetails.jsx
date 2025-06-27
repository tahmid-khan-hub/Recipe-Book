import React, { use, useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const RecipeDetails = () => {
  const { user } = use(AuthContext);

  const id = useParams();
  const data = useLoaderData();

  const recipe = data.find((r) => r._id.toString() == id.id);
  console.log(recipe);

  const [likes, setLikes] = useState(recipe.likeCount);

  useEffect(() => {
    document.title = "RecipeBook | RecipeDetails";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleLike = () => {
    setLikes((prev) => prev + 1);

    fetch(`http://localhost:3000/recipes/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likeCount: likes + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Recipe liked successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
return (
  <div className="px-4">
    <div
      data-aos="fade-up"
      className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden p-6 mt-16 mb-24 border border-green-600  shadow-xl"
    >
      <div className="grid md:grid-cols-2 gap-8 items-stretch ">
        {/* Image Section */}
        <div className="w-full flex flex-col justify-center  items-center">
          <img
            src={recipe.photoURL}
            alt={recipe.title}
            className="w-full h-full max-h-[440px] object-cover rounded-lg"
          />
          
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-green-600 text-center md:text-left">
              {recipe.title}
            </h2>

            <p className="text-sm font-medium text-orange-700 mt-3">
            {likes} people interested in this recipe
          </p>

            <p>
              <span className="font-semibold">Categories:</span> {recipe.categories}
            </p>
            
            <p>
              <span className="font-semibold">Cuisine:</span> {recipe.cuisineType}
            </p>
            <p>
              <span className="font-semibold">Prep Time:</span> {recipe.prepTime} minutes
            </p>

            <div>
              <h5 className="font-semibold">Ingredients:</h5>
              
              <p className="bg-gray-100 rounded p-2">{recipe.ingredients}</p>
            </div>

            <div>
              <h5 className="font-semibold">Instructions:</h5>
              
              <p className="bg-gray-100 rounded p-2">{recipe.instructions}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            {user.email == recipe.userEmail ? (
              <button
                disabled
                className="cursor-not-allowed text-white bg-gradient-to-r from-gray-300 to-gray-400 border-gray-800 shadow-md shadow-gray-300 font-semibold py-2 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                <FaThumbsUp /> Like
              </button>
            ) : (
              <button
                onClick={handleLike}
                className="text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300 font-semibold py-2 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                <FaThumbsUp /> Like
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default RecipeDetails;
