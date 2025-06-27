import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import TopRecipe from '../TopRecipe/TopRecipe';
import RecipeSeries from '../RecipeSeries/RecipeSeries';
import IngredientOfWeek from '../IngredientOfWeek/IngredientOfWeek';
import { useLoaderData } from 'react-router';
import ChefsPick from '../ChefsPick/ChefsPick';


const Home = () => {
    const recipeData = useLoaderData();

    useEffect(()=>{
        window.scrollTo(0,0);
        document.title = "RecipeBook | Home"
    },[])
    return (
        <div className='overflow-x-hidden'>
            <Banner></Banner>
            <TopRecipe recipeData={recipeData}></TopRecipe>
            <IngredientOfWeek></IngredientOfWeek>
            <RecipeSeries></RecipeSeries>
            <ChefsPick></ChefsPick>
        </div>
    );
};

export default Home;