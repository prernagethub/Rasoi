import { createContext, useState } from "react";

export const recipeContext = createContext(null);

import React from "react";

const Recipecontext = (props) => {
  const defaultData = [
    {
      id: "recipe-001", // Normally generated using nanoid() or uuid
      image:
        "https://www.ruchiskitchen.com/wp-content/uploads/2015/04/Achari-paneer-tikka-recipe-6-683x1024.jpg",
      title: "Spicy Paneer Tikka",
      desc: "Delicious spicy paneer tikka cooked in a tandoor style. Grill them until golden. Serve with chutney.",
      chef: "Manish Singh",
      ingr: "Paneer, Curd, Red Chili Powder, Garam Masala, Ginger-Garlic Paste",
      inst: "Marinate paneer cubes for 2 hours. Grill them until golden. Serve with chutney.",
      category: "dinner",
    },
    {
      id: "recipe-002",
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

export default Recipecontext;
