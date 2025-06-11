import React from "react";
import { Link } from "react-router-dom"; // Correct import

const RecipeTemplate = ({ recipe }) => {
  const { id, image, chef, title, desc } = recipe;

  return (
    <div className="flex">
      <Link
        to={`/recipes/details/${id}`}
        className="block w-56 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white text-black"
      >
        <div>
          <img
            className="w-full h-50 object-cover transform hover:scale-110 transition-transform duration-600"
            src={image}
            alt={`recipe ${title}`}
          />
        </div>
        <div className="p-4 bg-zinc-300">
          <h2 className="font-semibold">Recipe name: {title}</h2>
          <p>Chef: {chef}</p>
          <p>
            {desc ? desc.slice(0, 100) + "..." : "No description available."}
          </p>
          <span className="text-blue-700">more</span>
        </div>
      </Link>
    </div>
  );
};

export default RecipeTemplate;
