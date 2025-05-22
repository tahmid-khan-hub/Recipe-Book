import React, { use, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const AddRecipe = () => {

    const {user} = use(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
      });
    }, []);

    const handleNewRecipe = e =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());
        newRecipe.likeCount = 0;
        newRecipe.userEmail = user?.email;

        console.log(newRecipe);

        fetch('https://recipe-book-app-server-sage.vercel.app/recipes', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newRecipe)
        }) 
            .then(res => res.json())
            .then(data => {
                console.log('new recipe added', data);
                navigate("/myrecipe")
                Swal.fire({
                    title: "Recipe added successfully",
                    icon: "success",
                    text: "Welcome!",
                });
            })
    }

  return (
    <div data-aos="fade-up" className="card bg-base-100 w-11/12 max-w-2xl mx-auto shrink-0 shadow-2xl shadow-green-500 mt-16 mb-24 border-1 border-green-600">
    <div className="card-body text-green-900">
        <h1 className="text-3xl font-bold text-center">Add Recipe</h1>
        <p className="text-center mt-3 mb-6">Share your culinary creations with our community! Fill out the form below to submit your delicious recipe.</p>
        <form onSubmit={handleNewRecipe} className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-6 md:gap-y-5">
            <div>
                <label className="label block font-bold mb-1">PhotoURL:</label>
                <input
                    className="input w-full"
                    type="text"
                    name="photoURL"
                    placeholder="Enter PhotoURL"
                     required                 
                />
            </div>
            <div>
                <label className="label block font-bold mb-1">Title:</label>
                <input
                    className="input w-full"
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    required
                />
            </div>

            <div className="col-span-1 md:col-span-2">
                <label className="label block font-bold mb-1">Ingredients:</label>
                <textarea className="textarea w-full h-36" name="ingredients" placeholder="List all ingredients separated by newlines" required/>
            </div>

            <div className="col-span-1 md:col-span-2">
                <label className="label block font-bold mb-1">Instructions:</label>
                <textarea className="textarea w-full h-56" name="instructions" placeholder="Provide clear, step-by-step instructions" required/>
            </div>

            <div>
                <label className="label block font-bold mb-1">Cuisine Type:</label>
                <select className="select w-full" name="cuisineType"required >
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            <div>
                <label className="label block font-bold mb-1">Preparation Time (minutes):</label>
                <input className="input w-full" type="number" name="prepTime" min="0" required/>
            </div>

            <div className="col-span-1 md:col-span-2">
                <label className="label block font-bold mb-2">Categories:</label>
                <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-3">
                    <label className="label cursor-pointer">
                        <input type="checkbox" name="categories" value="Breakfast" className="checkbox" />
                        <span className="label-text ml-2">Breakfast</span>
                    </label>
                    <label className="label cursor-pointer">
                        <input type="checkbox" name="categories" value="Lunch" className="checkbox" />
                        <span className="label-text ml-2">Lunch</span>
                    </label>
                    <label className="label cursor-pointer">
                        <input type="checkbox" name="categories" value="Dinner" className="checkbox" />
                        <span className="label-text ml-2">Dinner</span>
                    </label>
                    <label className="label cursor-pointer">
                        <input type="checkbox" name="categories" value="Dessert" className="checkbox" />
                        <span className="label-text ml-2">Dessert</span>
                    </label>
                    <label className="label cursor-pointer">
                        <input type="checkbox" name="categories" value="Vegan" className="checkbox" />
                        <span className="label-text ml-2">Vegan</span>
                    </label>
                </div>
            </div>

            <div>
                <label className="label block font-bold mb-1">Like Count:</label>
                <input className="input w-full" type="number" value="0" readOnly />
            </div>

            <div className="mt-8 col-span-1 md:col-span-2 flex justify-center">
                <button className="btn w-full text-white rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition border-1 border-orange-800 shadow-md shadow-orange-300" type="submit">
                    Add Recipe
                </button>
            </div>
        </form>
    </div>
</div>
  );
};

export default AddRecipe;
