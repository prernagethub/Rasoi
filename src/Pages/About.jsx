import React from "react";

const About = () => {
  return (
    <div className="  text-gray-100 px-6 py-12 transition-all duration-700 ease-in-out overflow-y-hidden">
      <div className="max-w-4xl mx-auto space-y-10 ">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 hover:scale-105 transition duration-300">
            🍲 Welcome to Rasoi!
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            A cozy corner of the internet for food lovers 🍕🍜🥗
          </p>
        </div>

        {/* Description Card */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10 transition-transform duration-500 hover:scale-105 hover:shadow-yellow-600">
          <p className="text-gray-200 text-lg leading-relaxed">
            At <span className="text-yellow-300 font-semibold">TastyTales</span>, we bring you mouth-watering recipes from around the world 🌍. Whether you're a beginner or a seasoned chef 👩‍🍳, our step-by-step guides will help you cook with confidence.
          </p>
          <p className="mt-4 text-gray-400">
            Our mission is simple — make cooking joyful, easy, and delicious 😋.
          </p>
        </div>

        {/* Special Features */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">✨ What We Offer</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              "✅ Step-by-step recipes",
              "📝 Custom recipe creation",
              "👨‍👩‍👧‍👦 Family-friendly meals",
              "📷 High-quality food images",
              "🌱 Healthy options",
              "🍰 Sweet dessert corner",
            ].map((feature, i) => (
              <li
                key={i}
                className="bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:bg-yellow-50 hover:text-black"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <a
            href="/recipes"
            className="inline-block px-6 py-3 bg-yellow-50 hover:bg-yellow-600 text-black text-lg font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-yellow-400"
          >
            🍽️ Explore Recipes
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

