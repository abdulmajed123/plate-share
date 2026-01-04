import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTheme } from "next-themes";

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      } py-16 px-4 transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
            Have questions or want to get involved? Reach out to us and we'll
            get back to you soon.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-500" />
              <span>abdulmajed5618@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-pink-500" />
              <span>+880 01893505618</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-500" />
              <span>Jamalpur,Mymensingh, Bangladesh</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            {[
              {
                icon: <FaFacebookF />,
                href: "https://facebook.com",
                color: "hover:bg-blue-600",
              },

              {
                icon: <FaLinkedinIn />,
                href: "https://linkedin.com",
                color: "hover:bg-blue-700",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition transform hover:scale-110 ${
                  theme === "dark"
                    ? `bg-gray-700 ${social.color} text-white`
                    : `bg-gray-200 ${social.color} text-gray-900`
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`input input-bordered w-full rounded-lg px-4 py-3 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-pink-500"
                  : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-pink-500"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`input input-bordered w-full rounded-lg px-4 py-3 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-pink-500"
                  : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-pink-500"
              }`}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className={`textarea textarea-bordered w-full rounded-lg px-4 py-3 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-pink-500"
                  : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-pink-500"
              }`}
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition transform"
            >
              Send Message
            </button>
            {submitted && (
              <p
                className={`mt-3 font-medium ${
                  theme === "dark" ? "text-green-400" : "text-green-600"
                }`}
              >
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
