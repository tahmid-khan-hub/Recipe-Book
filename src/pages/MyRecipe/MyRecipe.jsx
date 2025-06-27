import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import NoMyRecipe from "../../assets/lotties/NoMyRecipe.json";

const MyRecipe = () => {
  const { user } = use(AuthContext);
  const [myRecipe, setMyRecipe] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const Allrecipe = useLoaderData();

  useEffect(() => {
    document.title = "RecipeBook | MyRecipe";
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

  const handleRecipeUpdated = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newRecipe = Object.fromEntries(formData.entries());

    newRecipe.categories = formData.getAll("categories");

    console.log(newRecipe);

    fetch(`https://recipe-book-server-kohl-five.vercel.app/recipes/${selectedRecipe._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update", data);

        setMyRecipe((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe._id === selectedRecipe._id
              ? { ...recipe, ...newRecipe }
              : recipe
          )
        );

        setSelectedRecipe(null);
        Swal.fire({
          title: "Recipe updated successfully ",
          icon: "success",
          draggable: true,
        });
      });
  };

  const handleDeleteRecipe = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recipe-book-server-kohl-five.vercel.app/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted", data);
            setMyRecipe((prev) => prev.filter((recipe) => recipe._id !== id));

            Swal.fire({
              title: "Deleted!",
              text: "Your recipe has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="my-10 px-4 md:px-10 ">
        <h2 className="text-3xl font-bold mb-12 text-orange-800 text-center">
          My Recipes
        </h2>

        {myRecipe.length > 0 ? (
          <div className="space-y-16 max-w-5xl mx-auto">
            {myRecipe.map((recipe) => (
              <div
                data-aos="fade-up"
                key={recipe._id}
                className="grid md:grid-cols-2 gap-8 items-stretch bg-white shadow-md rounded-xl overflow-hidden hover:shadow-green-600 border border-green-600 p-4"
              >
                {/* Image Section */}
                <div className="w-full flex flex-col justify-center items-center">
                  <img
                    src={recipe.photoURL}
                    alt={recipe.title}
                    className="w-full h-full max-h-[440px] object-cover rounded-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between h-full text-gray-800">
                  <div className="space-y-4">
                    <Fade>
                      <h3 className="text-2xl font-bold text-green-800 text-center md:text-left">
                        {recipe.title}
                      </h3>
                    </Fade>

                    <p>
                      <strong>Categories:</strong>{" "}
                      {Array.isArray(recipe.categories)
                        ? recipe.categories.join(", ")
                        : recipe.categories}
                    </p>
                    <p>
                      <strong>Cuisine:</strong> {recipe.cuisineType}
                    </p>
                    <p>
                      <strong>Prep Time:</strong> {recipe.prepTime} minutes
                    </p>

                    <div>
                      <h5 className="font-semibold">Ingredients:</h5>
                      <p className="bg-gray-100 rounded p-2 text-sm">
                        {recipe.ingredients}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Instructions:</h5>
                      <p className="bg-gray-100 rounded p-2 text-sm">
                        {recipe.instructions}
                      </p>
                    </div>

                    <p className="mt-2 font-medium text-green-700">
                      ❤️ Likes: {recipe.likeCount}
                    </p>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3 mt-6 justify-center md:justify-start">
                    <button
                      className="px-4 py-1 rounded text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300 text-sm"
                      onClick={() => {
                        setSelectedRecipe(recipe);
                        document.getElementById("my_modal_3").showModal();
                      }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteRecipe(recipe._id)}
                      className="px-4 py-1 rounded text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-800 shadow-md shadow-red-300 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 mb-11 text-center flex flex-col items-center justify-center">
            <div className="w-72 h-72">
              <Lottie animationData={NoMyRecipe} loop />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 ">
              You haven’t added any Recipe yet.
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              You can add your own recipe in Add Recipe page.
            </p>
          </div>
        )}
      </div>

      {selectedRecipe && (
        <dialog id="my_modal_3" className="modal py-5" open>
          <div className="modal-box max-h-[90vh] overflow-y-auto border-1 border-orange-600">
            <h2 className="text-center font-semibold text-2xl mb-5 text-orange-800">
              Update Recipe
            </h2>
            <form
              className="text-orange-800"
              onSubmit={handleRecipeUpdated}
              method="dialog"
            >
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-800"
                onClick={() => setSelectedRecipe(null)}
              >
                ✕
              </button>

              <div>
                <label className="label block font-bold mb-1">PhotoURL:</label>
                <input
                  className="input w-full"
                  type="text"
                  name="photoURL"
                  defaultValue={selectedRecipe.photoURL}
                />
              </div>

              <div>
                <label className="label block font-bold mb-1">Title:</label>
                <input
                  className="input w-full"
                  type="text"
                  name="title"
                  defaultValue={selectedRecipe.title}
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="label block font-bold mb-1">
                  Ingredients:
                </label>
                <textarea
                  className="textarea w-full h-36"
                  name="ingredients"
                  defaultValue={selectedRecipe.ingredients}
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="label block font-bold mb-1">
                  Instructions:
                </label>
                <textarea
                  className="textarea w-full h-56"
                  name="instructions"
                  defaultValue={selectedRecipe.instructions}
                />
              </div>

              <div>
                <label className="label block font-bold mb-1">
                  Cuisine Type:
                </label>
                <select
                  className="select w-full"
                  name="cuisineType"
                  defaultValue={selectedRecipe.cuisineType}
                >
                  <option value="Italian">Italian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Indian">Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className="label block font-bold mb-1">
                  Preparation Time (minutes):
                </label>
                <input
                  className="input w-full"
                  type="number"
                  name="prepTime"
                  min="0"
                  defaultValue={selectedRecipe.prepTime}
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="label block font-bold mb-2">
                  Categories:
                </label>
                <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-3">
                  {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                    (cat) => (
                      <label key={cat} className="label cursor-pointer">
                        <input
                          type="checkbox"
                          name="categories"
                          value={cat}
                          className="checkbox"
                          defaultChecked={selectedRecipe?.categories?.includes(
                            cat
                          )}
                        />
                        <span className="label-text ml-2">{cat}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
              <button className="btn mt-9 mb-4 w-full text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 border-orange-800 shadow-md shadow-orange-300">
                Update Recipe
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyRecipe;
