import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between mb-10">
      <div className="text-amber-50">
        <img
          src="https://lh3.googleusercontent.com/P0hNXGGNyStqDd0_34aafqRjAll_QAXRBUPMkT4XDS6mItCHDoZ1djGA3nti1IH1X3KMwueFTIQL_9L4bD9yguxgdXq8x09p5q_BewBa"
          alt=""
          width={80}
        />
      </div>
      <div className="flex justify-between w-1/3 items-center font-bold text-amber-50">
        <NavLink className={(e) => (e.isActive ? "text-amber-300" : "")} to="/">
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-amber-300" : "")}
          to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-amber-300" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-amber-300" : "")}
          to="/favroite"
        >
          Favroite
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
