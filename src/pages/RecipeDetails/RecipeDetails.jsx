import React, { use, useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";


const RecipeDetails = () => {

  const {user} = use(AuthContext);

  const id = useParams();
  const data = useLoaderData();

  const recipe = data.find((r) => r._id.toString() == id.id);
  console.log(recipe);

  const [likes, setLikes] = useState(recipe.likeCount);


  useEffect(() =>{
    document.title = "RecipeBook | RecipeDetails"
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleLike = () =>{
    setLikes((prev) => prev + 1);

    fetch(`https://recipe-book-app-server-sage.vercel.app/recipes/${recipe._id}`, {
      method: 'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({likeCount: likes + 1})
    })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Recipe liked successfully!",
          showConfirmButton: false,
          timer: 1500
        });

      })
  }

  return (
    <div>
      <div data-aos="fade-up" className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden p-6 mt-16 mb-24 border-1 border-green-600 hover:shadow-md hover:shadow-green-600 shadow-xl">
        <p className="text-center text-lg font-medium mb-11 text-orange-700">
        {likes} people interested in this recipe
        </p>

        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">{recipe.title}</h2>

        <img
          src={recipe.photoURL}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <div className="text-center mb-6">
          
          {
            user.email == recipe.userEmail ? <button
            disabled
            
            onClick={handleLike}
            className="cursor-not-allowed text-white bg-gradient-to-r from-gray-300 to-gray-400  border-gray-800 shadow-md shadow-gray-300 font-semibold py-2 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <FaThumbsUp /> Like
          </button> : 
          <button
            onClick={handleLike}
            className=" text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300 font-semibold py-2 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <FaThumbsUp /> Like
          </button>
          }
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
