import React, { useContext } from "react";
import { recipeContext } from "../Context/RecipeContext";
import RecipeTemplate from "../Components/RecipeTemplate";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl">All Recipes:</h1>
        <Link
          className="bg-amber-50 text-black px-4 py-2 rounded-xl font-bold"
          to="/recipes/createRecipe"
        >
          + Create Recipe
        </Link>
      </div>

      {data?.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {data.map((recipe) => (
            <RecipeTemplate key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="mt-8">No recipes found. Start by creating one! 🍽️</div>
      )}
    </div>
  );
};

export default Recipes;
