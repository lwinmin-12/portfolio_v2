import { LayoutTextFlip } from "./ui/layout-text-flip";

const Navbar = () => {
  return (
    <div className="px-3 md:px-12 bg-white sticky top-0 w-full h-16 border border-l-0 border-b-gray-400 flex items-center justify-between z-50">
     
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
