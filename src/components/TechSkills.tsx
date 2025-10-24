import React from "react";

const TechSkills = ({
  skills,
}: {
  skills: { icon: JSX.Element; name: string }[];
}) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 bg-white/70 shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md text-base sm:text-lg">
            {skill.icon}
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechSkills;