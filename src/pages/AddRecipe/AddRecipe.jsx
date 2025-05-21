import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const AddRecipe = () => {

    const {user} = use(AuthContext);

    const navigate = useNavigate();

    const handleNewRecipe = e =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());
        newRecipe.likeCount = 0;
        newRecipe.userEmail = user?.email;

        console.log(newRecipe);

        fetch('http://localhost:3000/recipes', {
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
            })
    }

  return (
    <div className="card bg-base-100 w-11/12 max-w-sm mx-auto shrink-0 shadow-2xl mt-16 mb-24">
      <div className="card-body text-green-900">
        <h1 className="text-3xl font-bold text-center">Add Recipe</h1>
        <form onSubmit={handleNewRecipe} className="fieldset">
          <label className="label mt-4 font-bold">PhotoURL:</label>
          <input
            className="input"
            type="text"
            name="photoURL"
            placeholder="Enter PhotoURL"
          />

          <label className="label mt-4 font-bold">Title:</label>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Enter Title"
          />

          <label className="label mt-4 font-bold">Ingredients:</label>
          <textarea className="textarea" name="ingredients" />

          <label className="label mt-4 font-bold">Instructions:</label>
          <textarea className="textarea" name="instructions" />

          <label className="label mt-4 font-bold">Cuisine Type:</label>
          <select className="select " name="cuisineType" >
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>

          <label className="label mt-4 font-bold">Preparation Time (minutes):</label>
          <input className="input" type="number" name="prepTime" min="0" />

          <label className="label mt-4 font-bold">Categories:</label>
          <label className="label">
            <input type="checkbox" name="categories" value="Breakfast" />{" "}
            Breakfast
          </label>
          <label className="label">
            <input type="checkbox" name="categories" value="Lunch" /> Lunch
          </label>
          <label className="label">
            <input type="checkbox" name="categories" value="Dinner" /> Dinner
          </label>
          <label className="label">
            <input type="checkbox" name="categories" value="Dessert" /> Dessert
          </label>
          <label className="label">
            <input type="checkbox" name="categories" value="Vegan" /> Vegan
          </label>

          <label className="label mt-5 font-bold">Like Count:</label>
          <input className="input" type="number" value="0" readOnly />

          <button className="btn btn-wide ml-[5%] md:ml-[10%] mt-8" type="submit">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
