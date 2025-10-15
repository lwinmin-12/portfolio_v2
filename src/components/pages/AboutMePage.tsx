"use client";
import React from "react";
import AboutHi from "../../animations/AboutHi.json";
import Lottie from "lottie-react";

const AboutMePage = () => {
  return (
    <div className="px-12 ">
      <p className="text-two text-gray-600">
        I’m Lwin Min Oo, 21. Started programming in 2021 as a hobby, now
        pursuing my passion to become a full-stack web developer.
      </p>
      <div className="flex justify-between items-center">
        <div className="w-[50%] ">
          <Lottie
            className="w-full"
            animationData={AboutHi}
            loop={true}
            autoPlay={true}
          />
        </div>
        <div className="w-[50%] space-y-10 p-12">
          <div>
            <h4 className="text-two">education</h4>
            <p className="text-one">
              I am a third-year physics student at Yadanabon University I
              dropped out of Yadanarbon University in early 2021. And then I
              attended courses at MMS IT and entered the web development field.
            </p>
          </div>
          <div>
            <h4 className="text-two">professional experiences</h4>
            <p className="text-one">
              I am a third-year physics student at Yadanabon University I
              dropped out of Yadanarbon University in early 2021. And then I
              attended courses at MMS IT and entered the web development field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
