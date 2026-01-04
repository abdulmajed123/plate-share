// import React from "react";

// const About = () => {
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-700 dark:to-blue-900 py-24 px-4 text-center">
//         <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
//           About Food Share Project
//         </h1>
//         <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
//           Food Share is a community-driven platform designed to reduce food
//           waste and help those in need. Connect, donate, and share meals easily
//           with people around you.
//         </p>
//       </section>

//       {/* Project Overview */}
//       <section className="py-16 px-4 max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
//         <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//           The Food Share Project is a full-stack web application where users can
//           share surplus food and request food as needed. It aims to reduce food
//           wastage, help the community, and make it easier for people to access
//           fresh meals in time.
//         </p>
//       </section>

//       {/* Features */}
//       <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
//         <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             {
//               title: "Donate Food",
//               desc: "Users can list extra food they have, specifying quantity, location, and expiry date to help others.",
//               icon: "🍎",
//             },
//             {
//               title: "Request Food",
//               desc: "Users can request food based on their needs and nearby donations, making food access easy and timely.",
//               icon: "🥘",
//             },
//             {
//               title: "Real-Time Updates",
//               desc: "Live updates on available food, requests, and notifications keep the community connected efficiently.",
//               icon: "⏱️",
//             },
//             {
//               title: "User Dashboard",
//               desc: "Each user has a dashboard to manage their donations, requests, and profile easily.",
//               icon: "📊",
//             },
//             {
//               title: "Search & Filter",
//               desc: "Advanced search and filtering options make finding available food fast and efficient.",
//               icon: "🔍",
//             },
//             {
//               title: "Secure Authentication",
//               desc: "Firebase Authentication ensures that user accounts and data are safe and secure.",
//               icon: "🔒",
//             },
//           ].map((feature, idx) => (
//             <div
//               key={idx}
//               className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//             >
//               <div className="text-3xl mb-3">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-700 dark:text-gray-200">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-16 px-4 max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">How It Works</h2>
//         <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300 text-left sm:text-left mx-auto max-w-2xl">
//           <li>
//             Users sign up and create a profile with basic info and location.
//           </li>
//           <li>
//             Donors can list extra food with quantity, description, and pickup
//             location.
//           </li>
//           <li>Users in need can browse available food or submit requests.</li>
//           <li>
//             Notifications are sent for matches, keeping the process fast and
//             organized.
//           </li>
//           <li>
//             Food is picked up/delivered, and users can manage their dashboard to
//             track activity.
//           </li>
//         </ol>
//       </section>

//       {/* Tech Stack */}
//       <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
//         <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {[
//             "React",
//             "Firebase",
//             "Node.js",
//             "Express",
//             "MongoDB",
//             "Tailwind CSS",
//           ].map((tech, idx) => (
//             <span
//               key={idx}
//               className="px-5 py-3 bg-white dark:bg-gray-700 rounded-full shadow font-semibold text-gray-900 dark:text-gray-100 hover:scale-105 transition-transform duration-300"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Team / Creator */}
//       <section className="py-16 px-4 max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">Creator</h2>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Creator"
//             className="rounded-full w-32 h-32 object-cover shadow-lg"
//           />
//           <div className="text-left sm:text-left max-w-md">
//             <h3 className="text-xl font-semibold mb-2">Moshiur Rahman</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Full-stack developer passionate about building community projects
//               that make a difference. Creator of the Food Share Project.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action / Newsletter */}
//       <section className="py-16 px-4 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-700 dark:to-blue-900 text-center">
//         <h2 className="text-3xl font-bold text-white mb-4">Stay Updated!</h2>
//         <p className="text-white/90 mb-6">
//           Subscribe to get latest food updates and community tips.
//         </p>
//         <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 rounded-md w-full sm:flex-1 outline-none focus:ring-2 focus:ring-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
//           />
//           <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 dark:bg-white dark:text-green-700 dark:hover:bg-gray-200 transition duration-300">
//             Subscribe
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-24 px-4 text-center shadow-sm">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          About Food Share Project
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Food Share is a community-driven platform designed to reduce food
          waste and help those in need. Connect, donate, and share meals easily
          with people around you.
        </p>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The Food Share Project is a full-stack web application where users can
          share surplus food and request food as needed. It aims to reduce food
          wastage, help the community, and make it easier for people to access
          fresh meals in time.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Donate Food",
              desc: "Users can list extra food they have, specifying quantity, location, and expiry date to help others.",
            },
            {
              title: "Request Food",
              desc: "Users can request food based on their needs and nearby donations, making food access easy and timely.",
            },
            {
              title: "Real-Time Updates",
              desc: "Live updates on available food, requests, and notifications keep the community connected efficiently.",
            },
            {
              title: "User Dashboard",
              desc: "Each user has a dashboard to manage their donations, requests, and profile easily.",
            },
            {
              title: "Search & Filter",
              desc: "Advanced search and filtering options make finding available food fast and efficient.",
            },
            {
              title: "Secure Authentication",
              desc: "Firebase Authentication ensures that user accounts and data are safe and secure.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300 text-left sm:text-left mx-auto max-w-2xl">
          <li>
            Users sign up and create a profile with basic info and location.
          </li>
          <li>
            Donors can list extra food with quantity, description, and pickup
            location.
          </li>
          <li>Users in need can browse available food or submit requests.</li>
          <li>
            Notifications are sent for matches, keeping the process fast and
            organized.
          </li>
          <li>
            Food is picked up/delivered, and users can manage their dashboard to
            track activity.
          </li>
        </ol>
      </section>

      {/* Tech Stack */}
      {/* <section className="py-16 px-4 bg-white dark:bg-gray-800 transition-colors duration-500">
        <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "React",
            "Firebase",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="px-5 py-3 bg-gray-100 dark:bg-gray-700 rounded-full shadow font-semibold text-gray-900 dark:text-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </section> */}

      {/* Team / Creator */}
      {/* <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Creator</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Creator"
            className="rounded-full w-32 h-32 object-cover shadow-lg"
          />
          <div className="text-left sm:text-left max-w-md">
            <h3 className="text-xl font-semibold mb-2">Moshiur Rahman</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Full-stack developer passionate about building community projects
              that make a difference. Creator of the Food Share Project.
            </p>
          </div>
        </div>
      </section> */}

      {/* Call to Action / Newsletter */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800 text-center shadow-inner">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Subscribe to get latest food updates and community tips.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 border-2 rounded-md w-full sm:flex-1 outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
          />
          <button className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition duration-300">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default About;
