import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../Context/Recipecontext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Recipedetails = () => {
  const navigate = useNavigate();
  const { data, setData, fevourite, setFevourite } = useContext(recipeContext);
  const { id } = useParams();
  const recipe = data.find((r) => r.id == id);

  const { register, reset, handleSubmit } = useForm({
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

  const SubmitHandler = (updatedRecipe) => {
    const i = data.findIndex((r) => r.id == id);
    const copydata = [...data];
    copydata[i] = { ...recipe, ...updatedRecipe };
    setData(copydata);
    window.localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated");
    reset();
  };

  const deleteHandler = () => {
    const filterData = data.filter((r) => r.id != id);
    setData(filterData);
    window.localStorage.setItem("recipes", JSON.stringify(filterData));
    window.localStorage.setItem("fevourite", JSON.stringify(fevourite));
    toast.error("Recipe Deleted");
    navigate("/recipes");
  };

  const FevouriteHandler = () => {
    const copyFevourite = [...fevourite, recipe];
    setFevourite(copyFevourite);
    window.localStorage.setItem("fevourite", JSON.stringify(copyFevourite));
  };

  const UnfevouriteHandler = () => {
    const filteredFevourite = fevourite.filter((f) => f.id != id);
    setFevourite(filteredFevourite);
    window.localStorage.setItem("fevourite", JSON.stringify(filteredFevourite));
  };

  return (
    <div className="mt-10 w-full h-screen overflow-auto flex flex-col lg:flex-row gap-10 px-10">
      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-green-700">{recipe.title}</h1>
        <img
          className="w-full max-h-[400px] object-cover rounded-lg shadow"
          src={recipe.image}
          alt={recipe.title}
        />
        <small className="text-lg text-gray-600 font-semibold">
          Chef: {recipe.chef}
        </small>

        {fevourite.find((r) => r.id === recipe.id) ? (
          <button
            onClick={UnfevouriteHandler}
            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 w-fit"
          >
            Remove from Favourites
          </button>
        ) : (
          <button
            onClick={FevouriteHandler}
            className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 w-fit"
          >
            Add to Favourites
          </button>
        )}
      </div>

      <form
        className="lg:w-1/2 w-full bg-white shadow-md rounded-lg p-6 space-y-4"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Update Recipe
        </h2>

        <input
          className="w-full border-b p-2 outline-none"
          type="url"
          {...register("image")}
          placeholder="Image URL"
        />
        <input
          className="w-full border-b p-2 outline-none"
          type="text"
          {...register("title")}
          placeholder="Title"
        />
        <input
          className="w-full border-b p-2 outline-none"
          type="text"
          {...register("desc")}
          placeholder="Description"
        />
        <input
          className="w-full border-b p-2 outline-none"
          type="text"
          {...register("chef")}
          placeholder="Chef"
        />
        <textarea
          className="w-full border-b p-2 outline-none"
          {...register("ingr")}
          placeholder="Ingredients"
        ></textarea>
        <textarea
          className="w-full border-b p-2 outline-none"
          {...register("inst")}
          placeholder="Instructions"
        ></textarea>

        <select
          className="w-full border-b p-2 outline-none"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow"
          >
            Update Recipe
          </button>

          <button
            type="button"
            onClick={deleteHandler}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Recipedetails;
