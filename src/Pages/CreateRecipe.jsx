import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../Context/Recipecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (FormData) => {
    // console.log(recipe);

    recipe.id = nanoid();
    const copydata = [...data, FormData];
    setData(copydata);
    toast.success(`${FormData.tittle} created successfully`);
    reset();
    navigate(-1);
  };
  return (
    <div className="flex justify-center w-full  p-2">
      <form
        className="flex flex-col w-1/3"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <h2 className="text-3xl">Create New Recipe... 🍽️ </h2>
        <input
          type="url"
          placeholder="Enter Image Url "
          {...register("image")}
          className="border-b outline-none mt-3 py-2"
        />
        <input
          type="text"
          placeholder="tittle"
          {...register("tittle")}
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
        <select className="mt-4 bg-transparent">
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
        <button className="bg-white text-black  px-4 py-1 mt-10 font-semibold shadow-white">
          Create{" "}
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
