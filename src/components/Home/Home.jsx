import React from 'react';
import Banner from '../Banner/Banner';
import TopRecipe from '../TopRecipe/TopRecipe';
import RecipeSeries from '../RecipeSeries/RecipeSeries';
import IngredientOfWeek from '../IngredientOfWeek/IngredientOfWeek';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopRecipe></TopRecipe>
            <IngredientOfWeek></IngredientOfWeek>
            <RecipeSeries></RecipeSeries>
        </div>
    );
};

export default Home;