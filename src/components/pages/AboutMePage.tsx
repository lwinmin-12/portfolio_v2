"use client";
import React from "react";

const AboutMePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full px-3 md:p-12 py-5 md:py-0">
      {/* Animation Section */}
      <div className="w-full lg:w-[50%]">
        <h2 className="text-lg md:text-4xl sm:py-5">About Me</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          A quick introduction to who I am.
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-white md:p-5 space-y-6 w-full lg:w-[50%] ">
        {/* Experience badge only */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 mt-2 sm:mt-0 sm:px-3 py-1 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          4+ Years of Development Experience
        </div>

        {/* Content paragraphs */}
        <div className="space-y-4 text-gray-700">
          <p className="text-justify text-sm sm:text-base leading-relaxed">
            I’m a{" "}
            <span className="font-semibold text-gray-800">
              full-stack developer
            </span>{" "}
            with versatile experience across frontend, backend, cloud services,
            and IoT integration. I have built and delivered complex systems
            including <span className="font-medium">movie CMS dashboards</span>,{" "}
            <span className="font-medium">customer service portals</span>,{" "}
            <span className="font-medium">Next.js streaming platforms</span>,{" "}
            <span className="font-medium">deep-link generators</span>, and{" "}
            <span className="font-medium">
              real-time fuel station management systems
            </span>{" "}
            using Raspberry Pi and Banana Pi devices.
          </p>

          <p className="text-justify text-sm sm:text-base leading-relaxed">
            My technical expertise includes{" "}
            <span className="font-medium">
              React, Next.js, TypeScript, Node.js, Hono, NestJS, PostgreSQL,
              Prisma, AWS (EC2, S3), Docker, and Linux
            </span>
            . I focus on solving real-world problems, optimizing performance,
            and building scalable, reliable software through{" "}
            <span className="font-medium">clean architecture</span> and modern
            development practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
