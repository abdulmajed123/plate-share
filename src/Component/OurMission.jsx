import React from "react";
import CountUp from "react-countup";
import { FaHandsHelping, FaUsers, FaUtensils } from "react-icons/fa";

const OurMission = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        {/* Our Mission */}
        <div className="max-w-6xl mx-auto text-center px-4 mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our mission is to reduce food waste and ensure everyone has access
            to nutritious meals. By connecting donors with people in need, we
            create a stronger and caring community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4 text-center">
          {/* Stat 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <FaUsers className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-3xl font-bold">
              <h3 className="text-3xl font-bold">
                <CountUp end={1250} duration={5} />+
              </h3>
            </h3>
            <p className="text-gray-600 mt-2">Community Members</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <FaUtensils className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-3xl font-bold">
              <CountUp end={3500} duration={5} />+
            </h3>
            <p className="text-gray-600 mt-2">Meals Shared</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <FaHandsHelping className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-3xl font-bold">
              <CountUp end={150} duration={5} />+
            </h3>
            <p className="text-gray-600 mt-2">Active Donors</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
