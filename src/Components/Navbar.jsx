import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
   return (
        <div className="flex gap-x-5 mb-10">
            <NavLink
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/recipes"
            >
                Recipes
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/favroite"
            >
                Favroite
            </NavLink>
        </div>
    );
};

export default Navbar;
