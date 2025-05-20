import React from "react";

const AddRecipe = () => {

    const handleNewRecipe = e =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());
        newRecipe.likeCount = 0;

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
            })
    }

  return (
    <div className="card bg-base-100 w-11/12 max-w-sm mx-auto shrink-0 shadow-2xl mt-16 mb-24">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Add Recipe</h1>
        <form onSubmit={handleNewRecipe} className="fieldset">
          <label className="label mt-4">PhotoURL:</label>
          <input
            className="input"
            type="text"
            name="photoURL"
            placeholder="Enter PhotoURL"
          />

          <label className="label mt-4">Title:</label>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Enter Title"
          />

          <label className="label mt-4">Ingredients:</label>
          <textarea className="textarea" name="ingredients" />

          <label className="label mt-4">Instructions:</label>
          <textarea className="textarea" name="instructions" />

          <label className="label mt-4">Cuisine Type:</label>
          <select className="select " name="cuisineType" >
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>

          <label className="label mt-4">Preparation Time (minutes):</label>
          <input className="input" type="number" name="prepTime" min="0" />

          <label className="label mt-4">Categories:</label>
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

          <label className="label mt-5">Like Count:</label>
          <input className="input" type="number" value="0" readOnly />

          <button className="btn mt-8" type="submit">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
