"use client";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { CgMenuGridO } from "react-icons/cg";

const Sidebar = () => {
  // Track scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Apply a smooth spring motion to scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Map smooth progress (0–1) to 0–100% for CSS 'top'
  const topPosition = useTransform(smoothProgress, (v) => `${v * 100}%`);

  return (
    <div className="hidden md:flex w-[68px] h-screen sticky left-0 top-0 flex-col border-r border-gray-400">
      {/* Top Icon */}
      <div className="border-b border-gray-400 flex justify-center items-center h-[68px]">
        <CgMenuGridO size={24} />
      </div>

      {/* Scroll Line */}
      <div className="relative flex justify-center my-auto h-1/4">
        <div className="absolute top-0 w-[1px] h-full bg-gray-300"></div>

        {/* Motion Dot */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] bg-black rounded-full"
          style={{
            top: topPosition,
            marginTop: "-5px",
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
