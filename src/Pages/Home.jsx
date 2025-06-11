import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center m-50 px-6 text-center overflow-hidden">
      {/* Title with bounce animation */}
      <h1 className="text-6xl md:text-7xl animate-pulse font-extrabold text-amber-100  drop-shadow-lg mb-6 transition-all duration-500">
        🍛 Rasoi Ghar 🍽️
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-500 max-w-xl opacity-80 transition-opacity duration-500 hover:opacity-100">
        Discover desi delights, share your secret spices, and turn your home
        into a culinary heaven. 👨‍🍳👩‍🍳
        <br />
        Let’s cook something amazing together!
      </p>

      {/* CTA Button */}
      <Link
        to="/recipes/createRecipe"
        className="mt-10 inline-block bg-amber-50 hover:bg-amber-100 text-black  font-bold px-6 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
      >
        🍳 Create Your Recipe
      </Link>

      {/* Footer Text with fade-in */}
      <p className="mt-6 text-sm text-gray-500 animate-fade-in-down animate-bounce ">
        Made with ❤️ in your Rasoi.
      </p>

      {/* Emoji sprinkle animation */}
      <div className="absolute top-4 right-4 animate-pulse text-2xl">🌶️</div>
      <div className="absolute bottom-6 left-6 animate-bounce text-2xl">🥘</div>
      <div className="absolute bottom-10 right-10 animate-spin-slow text-2xl">
        🧂
      </div>
    </div>
  );
};

export default Home;
