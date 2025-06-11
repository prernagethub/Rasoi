import React from "react";

const About = () => {
  return (
    <div className=" text-gray-200 px-6 py-16 transition-all duration-700 ease-in-out">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-50 drop-shadow-md transition-transform duration-300 hover:scale-105">
            🍲 Welcome to Rasoi Ghar
          </h1>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Your cozy kitchen corner for desi delights & creative cooking 🧂🥘
          </p>
        </div>

        {/* About Description */}
        <div className="bg-[#1f1f1f] rounded-2xl shadow-md p-8 md:p-12 hover:shadow-orange-500/20 transition-shadow duration-500">
          <p className="text-lg leading-relaxed">
            <span className="text-orange-300 font-semibold">Rasoi Ghar</span> is
            more than just a recipe app — it’s a place where tradition meets
            innovation in the kitchen. Whether you’re new to cooking or a
            seasoned pro, we’ve got something simmering for you.
          </p>
          <p className="mt-5 text-gray-500">
            Discover recipes, create your own, and celebrate flavors that feel
            like home. 🍛✨
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-semibold text-amber-50 text-center mb-6">
            🌟 Features You'll Love
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "📖 Step-by-step guides",
              "📝 Save your own recipes",

              "📷 Visual previews",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] hover:bg-[#333] transition-all duration-300 p-5 rounded-xl text-center text-md font-medium border border-transparent "
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/recipes"
            className="inline-block px-7 py-3 bg-amber-100 hover:bg-amber-200 text-black font-bold text-lg rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-orange-400/40"
          >
            🍽️ Start Exploring Recipes
          </a>
          <p className="text-sm mt-3 text-gray-500">
            No matter your skill level, you’re welcome in our Rasoi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
