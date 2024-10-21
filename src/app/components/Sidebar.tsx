import { CgMenuGridO } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="w-[68px] h-screen sticky left-0 top-0 flex flex-col border border-r-gray-400 snap-none">
      <div className="border border-b-gray-400 flex justify-center items-center h-[68px] bg-red-300">
        <CgMenuGridO/>
      </div>
      <div className="flex flex-col justify-center h-full">
        <p>Sidebar</p>
      </div>
    </div>
  );
};

export default Sidebar;
