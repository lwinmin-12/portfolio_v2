"use client";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    company: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setIsSent(true);
      setFormData({
        name: "",
        subject: "",
        company: "",
        email: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (error: any) {
      console.error("Error:", error);
      setError(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh]  text-gray-800 flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="grid md:grid-cols-2 gap-16 w-full">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Let's Create Together
            </h1>
            <p className="text-gray-500 mb-12">lmo.lwinmin@gmail.com</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Find Me</h4>
              <div className="flex space-x-4 text-gray-700 text-xl">
                <a
                  href="https://www.facebook.com/lwinminoo45/"
                  target="_blank"
                  data-cursor="facebook"
                  className="hover:text-blue-600"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/lmo.lwin/"
                  target="_blank"
                  data-cursor="instagram"
                  className="hover:text-pink-500"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/lwinmin-12"
                  target="_blank"
                  data-cursor="github"
                  className="hover:text-gray-900"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/lwinminoo-dev/"
                  target="_blank"
                  data-cursor="linkedin"
                  className="hover:text-blue-500"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div>
              <p>Myanmar</p>
              <p>+959 798852056</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl font-light mb-8">Say hello</h2>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Choose subject"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="District"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Start typing here"
                className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1 resize-none"
                rows={3}
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="group inline-flex items-center gap-2 text-gray-800 hover:gap-3 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Submit"}
                {!isLoading && (
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                )}
              </button>

              {isSent && (
                <span className="text-green-600 text-sm">
                  Message sent successfully!
                </span>
              )}

              {error && <span className="text-red-600 text-sm">{error}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
