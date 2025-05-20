import React from 'react';
import Banner from '../Banner/Banner';
import TopRecipe from '../TopRecipe/TopRecipe';
import RecipeSeries from '../RecipeSeries/RecipeSeries';
import IngredientOfWeek from '../IngredientOfWeek/IngredientOfWeek';
import { useLoaderData } from 'react-router';

const Home = () => {
    const recipeData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TopRecipe recipeData={recipeData}></TopRecipe>
            <IngredientOfWeek></IngredientOfWeek>
            <RecipeSeries></RecipeSeries>
        </div>
    );
};

export default Home;