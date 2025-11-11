import React from "react";
import { FaHandsHelping, FaPlusCircle, FaSearch } from "react-icons/fa";

const HowItWorksCard = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A simple 3-step process to help you donate or receive food
            effortlessly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex-1 transform hover:scale-105 transition-transform">
            <FaPlusCircle className="text-yellow-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Post Food</h3>
            <p className="text-gray-600">
              Donate your extra food by posting details including quantity,
              location, and pickup time.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex-1 transform hover:scale-105 transition-transform">
            <FaSearch className="text-yellow-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Find Food</h3>
            <p className="text-gray-600">
              Search for available food near you and request what you need
              quickly and easily.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex-1 transform hover:scale-105 transition-transform">
            <FaHandsHelping className="text-yellow-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Collect Food</h3>
            <p className="text-gray-600">
              Coordinate with the donor to collect the food and enjoy your meal
              responsibly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksCard;
