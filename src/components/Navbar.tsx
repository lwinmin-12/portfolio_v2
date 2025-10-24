import { LayoutTextFlip } from "./ui/layout-text-flip";

const Navbar = () => {
  return (
    <div className="px-3 md:px-12 bg-white sticky top-0 w-full h-16 border border-l-0 border-b-gray-400 flex items-center justify-between z-50">
      {/* <img src='/logo.svg' alt="logo" />
      <div className="w-[40%] flex justify-around text-gray-500 font-medium">
        <a href="/" className="text-black">
          Home
        </a>
        <a href="/">about me</a>
        <a href="/">Projects</a>
        <a href="/">Skills</a>
        <a href="/">Contact</a>
      </div> */}
      <div>
        <p className="text-two">Lwin Min Oo</p>
        <LayoutTextFlip
          text="FullStack Developer "
          words={[
            "Building Scalable Web Apps",
            "From Frontend to Backend",
            "Crafting Clean Code",
            "Design. Develop. Deploy.",
            "Delivering End-to-End Solutions"
          ]}
          duration={5000}
        />
      </div>
    </div>
  );
};

export default Navbar;
