import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Favroite from "../Pages/Favroite";
import Recipes from "../Pages/Recipes";
import Pagenotfound from "../Pages/Pagenotfound";
import CreateRecipe from "../Pages/CreateRecipe";
import RecipeDetail from "../Pages/RecipeDetail";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Favroite" element={<Favroite />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipes/createRecipe" element={<CreateRecipe />} />
        <Route path="/details/:id" element={<RecipeDetail />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
