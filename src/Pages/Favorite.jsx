import React, { useContext } from "react";
import { recipeContext } from "../Context/RecipeContext";
import RecipeTemplate from "../Components/RecipeTemplate";

const Favorite = () => {
  const { favorite } = useContext(recipeContext);
  console.log(favorite);

  const Render = favorite.map((r) => <RecipeTemplate recipe={r} key={r.id} />);

  return (
    <div className="p-6 mt-12 ">
     

      {favorite.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-start">{Render}</div>
      ) : (
        <div>
          <h1 className="mt-4 text-2xl font-semibold"> No favourite recipes... 🍽️ </h1>
        </div>
      )}
    </div>
  );
};

export default Favorite;
