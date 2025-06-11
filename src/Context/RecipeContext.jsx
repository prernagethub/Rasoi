import { createContext, useState } from "react";

export const recipeContext = createContext(null);

import React from "react";

const RecipeContext = (props) => {
  const defaultData = [
    {
      id: "recipe-001",
      image:
        "https://scrummylane.com/wp-content/uploads/2021/06/veggie-sandwich-22-1024x1536.jpg",
      title: "Classic Veg Sandwich",
      desc: "A healthy and tasty veg sandwich perfect for breakfast.Layer all veggies between bread slices. Toast or grill if desired.",
      chef: "Prerna Rajut",
      ingr: "Bread, Tomato, Cucumber, Cheese, Mayo, Lettuce",
      inst: "Layer all veggies between bread slices. Toast or grill if desired.",
      category: "breakfast",
    },
  ];

  const [data, setData] = useState(() => {
    const storeData = window.localStorage.getItem("recipes");
    return storeData ? JSON.parse(storeData) : defaultData;
  });

  const [favorite, setFavorite] = useState(() => {
    const localFav = window.localStorage.getItem("favorite");
    return localFav ? JSON.parse(localFav) : [];
  });

  return (
    <>
      <recipeContext.Provider value={{ data, setData, favorite, setFavorite }}>
        {props.children}
      </recipeContext.Provider>
    </>
  );
};

export default RecipeContext;
