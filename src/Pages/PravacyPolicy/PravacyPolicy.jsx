import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
          At Food Share, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your information.
        </p>

        {/* Data Collection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Data We Collect</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Personal information such as name, email, and profile photo.
            </li>
            <li>
              Donation and request details including food type, quantity, and
              location.
            </li>
            <li>Usage information such as interactions with the platform.</li>
          </ul>
        </section>

        {/* How We Use Data */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>To provide and improve our services.</li>
            <li>To notify you about your donations and requests.</li>
            <li>To personalize your experience and maintain your dashboard.</li>
            <li>To comply with legal obligations and prevent misuse.</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Data Protection</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We use industry-standard measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        {/* Sharing Info */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Your data is never sold. We may share necessary information with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Other users to fulfill donation requests.</li>
            <li>Service providers assisting in platform functionality.</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </section>

        {/* Cookies / Analytics */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Cookies & Analytics</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We may use cookies and analytics tools to improve site performance
            and user experience. You can manage cookies in your browser
            settings.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            Email: abdulmajed5618@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
