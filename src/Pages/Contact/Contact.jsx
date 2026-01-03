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

const Contact = () => {
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
    // 💡 Here you can add API call to send message
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300">
            Have questions or want to get involved? Reach out to us and we'll
            get back to you soon.
          </p>

          <div className="space-y-4 text-gray-200">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-500" />
              <span>info@foodshare.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-pink-500" />
              <span>+880 1234 567 89</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-500" />
              <span>Gazipur, Bangladesh</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-pink-600 hover:text-white transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 hover:text-white transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 hover:text-white transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-700 hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-gray-800 text-gray-100 border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-gray-800 text-gray-100 border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea textarea-bordered w-full bg-gray-800 text-gray-100 border-gray-600"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-600 to-red-700 px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 transition transform"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-400 mt-2">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
