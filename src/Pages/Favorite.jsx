import React, { useContext } from "react";
import { recipeContext } from "../Context/Recipecontext";
import RecipeTemplate from "../Components/RecipeTemplate";

const Favorite = () => {
  const { favorite } = useContext(recipeContext);
  console.log(favorite);

  const Render = favorite.map((r) => <RecipeTemplate recipe={r} key={r.id} />);

  return (
    <div className="p-6 mt-12 min-h-screen bg-zinc-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">
        Your Favourite Recipes
      </h1>

      {favorite.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-start">{Render}</div>
      ) : (
        <div>
          <h1> You haven’t added any favourite recipes 🍽️ </h1>
        </div>
      )}
    </div>
  );
};

export default Favorite;
