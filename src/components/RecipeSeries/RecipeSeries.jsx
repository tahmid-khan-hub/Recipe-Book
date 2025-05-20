import React from "react";

const RecipeSeries = () => {
  const recipeSeries = [
    {
      id: 1,
      title: "Chinese Food Delights",
      description:
        "Explore classic and modern Chinese dishes—from dumplings to stir-fries.",
      thumbnail: "https://i.ibb.co/DPPchwG3/image.png",
      days: 6,
    },
    {
      id: 2,
      title: "South Indian Dishes",
      description:
        "Discover authentic recipes from Kerala, Tamil Nadu, and beyond with bold flavors.",
      thumbnail: "https://i.ibb.co/8gwhrVkK/image.png",
      days: 7,
    },
    {
      id: 3,
      title: "Mexican Fiesta",
      description:
        "Enjoy tacos, enchiladas, and vibrant Mexican flavors over 5 spicy days.",
      thumbnail: "https://i.ibb.co/ZzhYtX6Z/image.png",
      days: 5,
    },
  ];

  return (
    <section className="py-10 px-4  my-24">
      <h2 className="text-2xl text-center text-orange-800 font-bold mb-4 mt-2">Recipe Series & Mini Courses</h2>
      <p className="text-center text-orange-800 mb-7">Explore a variety of cooking journeys—from quick mini courses to deep-dive recipe series that bring global flavors to your kitchen.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipeSeries.map((series) => (
          <div
            key={series.id}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-md transition"
          >
            <img
              src={series.thumbnail}
              alt={series.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold">{series.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{series.description}</p>
            <p className="mt-3 text-xs text-gray-500">
              Duration: {series.days} Days
            </p>
            <button className="mt-7 px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-orange-600 bg-orange-500 rounded-xl hover:bg-orange-600 hover:from-orange-600 hover:to-orange-700 border-orange-800 shadow-md shadow-orange-300">
              View Series
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeSeries;
