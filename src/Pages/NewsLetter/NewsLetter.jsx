import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    // এখানে তুমি API কল বা Firebase এ save করতে পারো
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Get the latest updates, recipes, and tips straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border-2 border-gray-800 rounded-md w-full sm:w-auto flex-1 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-500"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-pink-400 dark:bg-pink-600 dark:hover:bg-pink-700 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
