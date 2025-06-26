import React from 'react';
import { Link } from 'react-router';
import Lottie from "lottie-react";
import errorLottie from "../../assets/lotties/404.json"

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className="w-72 h-72">
              <Lottie animationData={errorLottie} loop />
            </div>
            <p className='text-center text-2xl my-4'>Oops! The page you're looking for doesn't exist</p>
            <Link className="block mx-auto w-fit" to={`/`}><button className='btn text-white bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 w-[200px] shadow-xl shadow-green-300'>Go Back Home</button></Link>
        </div>

    );
};

export default ErrorPage;