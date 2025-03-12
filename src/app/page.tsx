import CanvasComponent from "@/components/Canvas";
import PrimaryButton from "@/components/PrimaryButton";

const page = () => {
  return (
    <div className="h-[200vh]">
      <div className="w-full px-12 flex justify-between">
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-full">
            <h1 className="text-three font-medium">Full Stack Developer</h1>
            <h3 className="text-one text-gray-500">
              Shaping Web Solutions from{" "}
              <span className="text-green-500">UI</span> to{" "}
              <span className="text-green-500">Database</span>.
            </h3>
            <PrimaryButton className="mt-10"/>
          </div>
        </div>
        <div className="w-[50%] h-[60vh]">
          <CanvasComponent />
        </div>
      </div>
      <hr className="border-gray-300 w-full" />

    </div>
  );
};

export default page;
