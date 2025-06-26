import { Link } from "react-router"; 
import Lottie from "lottie-react";
import aboutLottie from "../../assets/lotties/about.json";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 ">
      <div className="bg-base-100 shadow-xl rounded-xl p-8 border border-green-400 ">
        <h1 className="text-3xl text-orange-800 font-bold mb-12 text-center">About Us</h1>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Lottie Animation */}
          <div className="w-full md:w-1/2">
            <Lottie animationData={aboutLottie} loop={true} />
          </div>

          {/* About Text */}
          <div className="w-full md:w-1/2">
            <p className="mb-4 text-lg text-gray-700">
              Welcome to{" "}
              <span className="font-semibold text-green-600">RecipeBook</span> —
              your ultimate destination for delicious, easy-to-follow recipes from
              around the world. Whether you're a kitchen beginner or a seasoned
              chef, we’re here to inspire your cooking journey.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              Our mission is to make cooking <strong>fun, stress-free, and accessible</strong>.
              Each recipe is carefully curated with clear instructions, commonly
              available ingredients, and helpful tips.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              At <span className="font-semibold text-green-600">RecipeBook</span>,
              we believe food brings people together. That’s why we’ve built a
              community where users can contribute their own recipes, discover
              global cuisines, and share their love for food.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              We’re continuously growing, adding new categories, refining
              nutritional data, and improving the experience based on your feedback.
            </p>

            <div className="mt-6">
              <Link to="/">
                <button className="btn w-full btn-primary px-6 py-2 rounded-md text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300">Welcome</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
