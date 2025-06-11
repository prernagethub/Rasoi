import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Recipes from "../Pages/Recipes";
import Pagenotfound from "../Pages/Pagenotfound";
import CreateRecipe from "../Pages/CreateRecipe";
import RecipeDetail from "../Pages/RecipeDetail";
import Favorite from "../Pages/Favorite";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/createRecipe" element={<CreateRecipe />} />
        <Route path="/recipes/details/:id" element={<RecipeDetail />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
