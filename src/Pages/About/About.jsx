import React from "react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-6">
        About <span className="text-primary">Food Share</span>
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Food Share is a community-driven platform that helps reduce food waste
        by connecting people who have surplus food with those who need it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">🌱 Our Mission</h3>
          <p className="text-gray-600">
            To reduce food waste and fight hunger by making food sharing simple,
            fast, and accessible for everyone.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">🤝 How It Works</h3>
          <p className="text-gray-600">
            Donors post surplus food, and receivers can browse, request, and
            collect food based on location and availability.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">📍 Smart Search</h3>
          <p className="text-gray-600">
            Easily find food by location, quantity, and expiration date using
            our smart filtering system.
          </p>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">🔐 Secure Platform</h3>
          <p className="text-gray-600">
            User authentication and food status tracking ensure a safe and
            trusted food sharing experience.
          </p>
        </div>

        {/* Card 5 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">♻️ Social Impact</h3>
          <p className="text-gray-600">
            By sharing food, we protect the environment and support people in
            need across our community.
          </p>
        </div>

        {/* Card 6 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">💻 Technology</h3>
          <p className="text-gray-600">
            Built with React, Node.js, Express, MongoDB, and Firebase for a fast
            and reliable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
