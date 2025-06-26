import { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const chefsPicks = [
  {
    id: "682c57b39e58875dda7aef36",
    title: "Chana Masala (Chickpea Curry)",
    image: "https://i.ibb.co/qLVsNv15/image.png",
    description:
      "A classic North Indian dish made with tender chickpeas simmered in a rich, spiced tomato-onion gravy. Perfect with rice or naan.",
  },
  {
    id: "682dd0695d846bd5368af443",
    title: "Lemon Herb Roasted Chicken",
    image: "https://i.ibb.co/XxRFbRrS/image.png",
    description:
      "Juicy chicken roasted to perfection with fresh herbs, garlic, and a bright lemony finish. A comforting and flavorful dish.",
  },
  {
    id: "682e03f456ebe970fa34944d",
    title: "Coconut Chickpea Curry",
    image: "https://i.ibb.co/mL0C8Sy/image.png",
    description:
      "Creamy and mildly spiced curry made with coconut milk, chickpeas, and aromatic Indian spices. A hearty plant-based delight.",
  },
];

const ChefsPick = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="my-28 px-4">
      <h2 className="text-3xl text-orange-800 font-bold text-center mb-4">
        Chef’s Pick
      </h2>
      <p className="text-center text-gray-500 text-lg mb-7">
        Handpicked recipes by our chefs — tried, tested, and taste-approved!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {chefsPicks.map((recipe) => (
          <div
            data-aos="zoom-out"
            key={recipe.id}
            className="card bg-base-100 shadow-md border border-green-400 shadow-green-400 duration-300"
          >
            <figure>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-64 p-2 rounded-xl w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-orange-800 font-bold">
                {recipe.title}
              </h3>
              <p className="text-gray-600">{recipe.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/recipeDetails/${recipe.id}`}>
                  <button className="btn btn-primary px-6 py-2 rounded-md text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-800 shadow-md shadow-green-300">
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefsPick;
