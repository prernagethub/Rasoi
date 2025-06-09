import React, { useContext } from "react";
import { recipeContext } from "../Context/Recipecontext";
import RecipeTemplate from "../Components/RecipeTemplate";
import { Link } from "react-router";

const Recipes = () => {
  const { data } = useContext(recipeContext);
  // console.log(data);

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-bold text-2xl">All Recipes:</h1>
        {data.length > 0 ? (
          <div className="flex flex-wrap mt-20 flex-start gap-4">
            {data.map((recipe) => (
              <RecipeTemplate key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="mt-8 ">No recipes found. Start by creating one! 🍽️</div>
        )}
      </div>

      <div>
        <Link
          className="bg-amber-50 text-black px-4 py-2 rounded-xl font-bold"
          to="/Recipes/createRecipe"
        >
          + Create Recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipes;
