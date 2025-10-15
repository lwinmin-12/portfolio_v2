import React from "react";
import PrimaryButton from "../PrimaryButton";
import CanvasComponent from "../Canvas";

const LandingPage = () => {
  return (
    <div className="w-full px-12 flex justify-between">
      <div className="w-[70%] flex justify-center items-center">
        <div className="w-full ">
          <p className="text-one text-black ">Hello I am</p>
          <p className="text-two text-green-500">Lwin Min Oo</p>
          <p className="text-five font-bold">EXPERIENCED</p>
          <p className="text-outline text-five text-white font-bold">
            WEB DEVELOPER
          </p>

          {/* <p>Shaping Web Solution From UI to Database.</p> */}

          {/* <h1 className="text-three font-medium">Full Stack Developer</h1>
          <h3 className="text-one text-gray-500">
            Shaping Web Solutions from{" "}
            <span className="text-green-500">UI</span> to{" "}
            <span className="text-green-500">Database</span>.
          </h3> */}
        </div>
      </div>
      <div className="w-[30%] h-[60vh]">
        <CanvasComponent />
      </div>
    </div>
  );
};

export default LandingPage;
