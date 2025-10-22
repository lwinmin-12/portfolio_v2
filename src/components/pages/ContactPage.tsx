import React from "react";

export default function ContactPage() {
  return (
    <section className="min-h-[80vh] bg-gray-50 text-gray-800 flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="grid md:grid-cols-2 gap-16 w-full">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Let’s Create Together
            </h1>
            <p className="text-gray-500 mb-12">lmo.lwinmin@gmail.com</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Find Me</h4>
              <p className="space-x-4">
                <span>FB</span>
                <span>IG</span>
                <span>BE</span>
                <span>IN</span>
              </p>
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

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Choose subject"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="District"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                Message
              </label>
              <textarea
                placeholder="Start typing here"
                className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1 resize-none"
                rows={3}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 text-gray-800 hover:gap-3 transition-all font-medium"
              >
                Submit
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
