import React from "react";
import PrimaryButton from "../PrimaryButton";
import CanvasComponent from "../Canvas";

const LandingPage = () => {
  return (
    <div className="w-full px-3 md:px-12 flex flex-col justify-center items-center sm:flex-row sm:justify-between">
      <div className="w-full sm:w-[60%] lg:w-[70%] flex justify-center items-center mt-8">
        <div className="w-full ">
          <p className="text-one text-black text-center sm:text-start">
            Hello I am
          </p>
          <p className="text-two text-green-500 text-center sm:text-start">
            Lwin Min Oo
          </p>
          <p className="text-three md:text-four lg:text-five font-bold text-center sm:text-start">
            EXPERIENCED
          </p>
          <p className="text-outline text-center sm:text-start text-three md:text-four lg:text-five text-white font-bold">
            WEB DEVELOPER
          </p>
        </div>
      </div>
      <hr className="border-gray-300 w-full sm:hidden" />

      <div className="w-full first-letter:sm:w-[40%] md:w-[30%] h-[60vh]">
        <CanvasComponent />
      </div>
    </div>
  );
};

export default LandingPage;
