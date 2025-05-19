import React from 'react';
import Banner from '../Banner/Banner';
import TopRecipe from '../TopRecipe/TopRecipe';
import RecipeSeries from '../RecipeSeries/RecipeSeries';
import BehindRecipe from '../BehindRecipe/BehindRecipe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopRecipe></TopRecipe>
            <RecipeSeries></RecipeSeries>
            <BehindRecipe></BehindRecipe>
        </div>
    );
};

export default Home;