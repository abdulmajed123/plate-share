import { FaHandHoldingHeart, FaUsers, FaBoxOpen } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";

const Impact = () => {
  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Community Impact
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Together, we are reducing food waste and helping people in need. Every
          donation makes a real difference.
        </p>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <GiMeal className="text-4xl text-green-500 mx-auto" />
            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              1,240+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Meals Donated</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaUsers className="text-4xl text-blue-500 mx-auto" />
            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              780+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">People Helped</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaHandHoldingHeart className="text-4xl text-pink-500 mx-auto" />
            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              320+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Active Donors</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaBoxOpen className="text-4xl text-yellow-500 mx-auto" />
            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              2.5 Tons
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Food Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
