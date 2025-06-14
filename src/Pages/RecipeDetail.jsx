import React, { useContext } from "react";
import { recipeContext } from "../Context/RecipeContext";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecipeDetail = () => {
  const navigate = useNavigate();
  const { data, setData, favorite, setFavorite } = useContext(recipeContext);
  console.log(data);

  const { id } = useParams();
  const recipe = data.find((r) => r.id == id);
  // console.log(recipe);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: recipe.image,
      title: recipe.title,
      chef: recipe.chef,
      desc: recipe.desc,
      ingr: recipe.ingr,
      inst: recipe.inst,
      category: recipe.category,
    },
  });

  // console.log("Category:", recipe.category);

  const isFavorite = favorite.find((item) => item.id == id);
  const removeFromFavorite = () => {
    const copyFavorite = favorite.filter((r) => r.id != id);
    setFavorite(copyFavorite);
    window.localStorage.setItem("favorite", JSON.stringify(copyFavorite));
  };

  const addToFavorite = () => {
    const copyFavorite = [...favorite, recipe];
    setFavorite(copyFavorite);
    window.localStorage.setItem("favorite", JSON.stringify(copyFavorite));
  };

  const SubmitHandler = (updatedRecipe) => {
    const i = data.findIndex((r) => r.id == id);
    const copyData = [...data];
    copyData[i] = { ...recipe, ...updatedRecipe };
    setData(copyData);
    toast.success("Recipe updated");
    reset();
  };
  const deleteHandler = () => {
    const filterData = data.filter((r) => r.id != id);
    setData(filterData);
    toast.error("Recipe deleted!");
    navigate("/recipes");
  };

  return (
    <div className="flex gap-20 ">
      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-amber-800">{recipe.title}</h1>
        <img
          className=" max-h-[400px] object-cover rounded-lg shadow"
          src={recipe.image}
          alt={recipe.tittle}
        />
        <small className="text-lg text-white font-semibold">
          👨‍🍳: {recipe.chef}
        </small>
        {isFavorite ? (
          <button
            onClick={removeFromFavorite}
            className="bg-red-500 font-semibold text-white px-4 py-2 rounded w-fit hover:bg-red-600"
          >
            🤍unFavourite
          </button>
        ) : (
          <button
            onClick={addToFavorite}
            className="bg-green-500 font-semibold text-white px-4 py-2 rounded w-fit hover:bg-green-600"
          >
            ❤️ Favourites
          </button>
        )}
      </div>
      <div className="flex justify-center w-1/2  px-12">
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(SubmitHandler)}
        >
          <h2 className="text-3xl"> Recipe... 🍽️ </h2>
          <input
            type="url"
            placeholder="Enter Image Url "
            {...register("image")}
            className="border-b outline-none mt-3 py-2"
          />
          <input
            type="text"
            placeholder="title"
            {...register("title")}
            className="border-b outline-none mt-3 py-2"
          />
          <input
            type="text"
            placeholder="chef "
            {...register("chef")}
            className="border-b outline-none mt-3 py-2"
          />
          <textarea
            type="text"
            placeholder="Recipe-Ingredients"
            className="border-b outline-none mt-3 py-2"
            rows={3}
            {...register("ingr")}
          />
          <textarea
            type="text"
            placeholder="Recipe-Instruction"
            className="border-b outline-none mt-3 py-2"
            rows={3}
            {...register("inst")}
          />
          <textarea
            type="text"
            placeholder="Recipe-Description"
            className="border-b outline-none mt-3 py-2"
            rows={3}
            {...register("desc")}
          />
          <select className="mt-4 bg-transparent" {...register("category")}>
            <option value="">Select Category</option>
            <option className="text-black" value="Breakfast">
              Breakfast
            </option>
            <option className="text-black" value="Lunch">
              Lunch
            </option>
            <option className="text-black" value="Supper">
              Supper
            </option>
            <option className="text-black" value="Dinner">
              Dinner
            </option>
          </select>
          <div className="flex mt-8 gap-4">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded shadow"
            >
              Update Recipe
            </button>

            <button
              type="button"
              onClick={deleteHandler}
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded shadow"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeDetail;
