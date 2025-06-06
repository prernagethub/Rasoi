import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Favroite from "../Pages/Favroite";
import Recipes from "../Pages/Recipes";
import Recipe from "../Pages/Recipe";
import Pagenotfound from "../Pages/Pagenotfound";
import Create from "../Pages/Create";
import Update from "../Pages/Update";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Favroite" element={<Favroite />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/recipes/create-recipe" element={<Create />} />
        <Route path="/recipes/detail/:id" element={<Recipe />} />
        <Route path="/recipes/update-recipe/:id" element={<Update />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
