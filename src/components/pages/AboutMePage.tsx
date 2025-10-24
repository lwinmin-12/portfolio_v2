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
        <div className=" space-y-4 text-gray-700">
          <p className="text-justify text-sm sm:text-base leading-relaxed">
            Hi! I'm a developer with{" "}
            <span className="font-semibold text-gray-800">
              4 years of experience
            </span>{" "}
            in web development and software projects. My journey began during my
            third year in Physics at Yadanarbon University, where I discovered
            my passion for programming. While attending university, I also
            completed the{" "}
            <span className="font-medium">
              A+ certification at I-Net College
            </span>
            , strengthening my foundation in IT and computing.
          </p>

          <p className="text-justify text-sm sm:text-base leading-relaxed">
            I then joined <span className="font-medium">MMS IT</span>, gaining
            hands-on experience in building dynamic and responsive web
            applications. To further advance my skills, I completed the{" "}
            <span className="font-medium">NCC Level in Computing</span>,
            deepening my understanding of software development, databases, and
            modern programming practices.
          </p>

          <p className="text-justify text-sm sm:text-base leading-relaxed">
            I've worked on a variety of projects, focusing on delivering{" "}
            <span className="font-medium">
              clean, efficient, and scalable solutions
            </span>
            . I enjoy solving problems through code, learning new technologies,
            and creating experiences that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
