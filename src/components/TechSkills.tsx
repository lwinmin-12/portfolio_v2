import React from "react";


const TechSkills = ({
  skills,
}: {
  skills: { icon: JSX.Element; name: string }[];
}) => {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-2  px-4 py-3 rounded-lg border border-gray-200 bg-white/70 shadow-sm hover:shadow-md  transition-all duration-200"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-md  text-lg">
            {skill.icon}
          </div>
          <span className="text-sm font-medium text-gray-800">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechSkills;
