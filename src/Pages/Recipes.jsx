import React, { useContext } from "react";
import { recipeContext } from "../Context/Recipecontext";
import { Link } from "react-router";
import RecipeTemplate from "../Components/RecipeTemplate";

const Recipes = () => {
  const { data } = useContext(recipeContext);
  console.log(data);
  const showrecipies = data.map((recipe) => (
    <RecipeTemplate key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="w-full flex flex-wrap ">
      <Link
        className="absolute right-[10%] bg-green-400 px-4 py-2 rounded"
        to="/recipes/create-recipe"
      >
        Create Recipe
      </Link>
      {data.length > 0 ? showrecipies : "No recipes found!"}
    </div>
  );
};

export default Recipes;
