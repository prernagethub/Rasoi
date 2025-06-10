import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div className=" h-[80vh]  text-white flex flex-col items-center justify-center px-6 py-12 transition-all duration-700 ease-in-out">
      {/* Main Icon */}
      <div className=""><img src="https://i.pinimg.com/originals/93/5e/f3/935ef3e9c164fe37ddde01ccd8cec4ba.gif" alt="" /></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 transition duration-500 hover:scale-105">
        404 - Recipe Not Found!
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 text-lg md:text-xl text-center max-w-md mb-8">
        Oops! Looks like the recipe you’re looking for is still cooking or maybe
        it’s burnt 🍳😅.
      </p>

      {/* CTA Button */}
      <Link
        to="/"
        className="bg-yellow-50 text-black px-6 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:shadow-yellow-400"
      >
        🍽️ Back to Home
      </Link>
    </div>
  );
};

export default Pagenotfound;
