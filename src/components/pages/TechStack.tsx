import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaLinux,
  FaDocker,
  FaAws,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiShadcnui,
  SiAntdesign,
  SiFramer,
  SiTypescript,
  SiRemix,
  SiReactrouter,
  SiReactquery,
  SiHono,
  SiExpress,
  SiNestjs,
  SiTypeorm,
  SiPrisma,
  SiMongoose,
  SiMqtt,
  SiRabbitmq,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiCypress,
  SiGo,
  SiSqlite,
  SiRaspberrypi,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import TechSkills from "../TechSkills";
import { CiMicrochip } from "react-icons/ci";

const frontendSkills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiShadcnui />, name: "shadcn/ui" },
  { icon: <SiAntdesign />, name: "Ant Design" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiRemix />, name: "Remix" },
  { icon: <FaReact />, name: "React Native" },
  { icon: <SiReactrouter />, name: "React Router" },
  { icon: <SiReactquery />, name: "React Query" },
  { icon: <SiRedux />, name: "Redux" },
];

const backendSkills = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiHono />, name: "Hono" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiNestjs />, name: "Nest.js" },
  { icon: <SiTypeorm />, name: "TypeORM" },
  { icon: <SiPrisma />, name: "Prisma" },
  { icon: <SiMongoose />, name: "Mongoose" },
  { icon: <SiSqlite />, name: "SQLC" },
  { icon: <FaPhp />, name: "PHP (OOP)" },
  { icon: <FaLaravel />, name: "Laravel" },
  { icon: <SiMqtt />, name: "MQTT" },
  { icon: <SiRabbitmq />, name: "RabbitMQ" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiRedis />, name: "Redis" },
  { icon: <FaDatabase />, name: "REST API" },
];

const devopsSkills = [
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiCypress />, name: "CI/CD" },
  { icon: <FaLinux />, name: "Linux" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaAws />, name: "AWS (EC2, Lambda, S3)" },
  { icon: <SiRaspberrypi />, name: "Raspberry Pi" },
  { icon: <CiMicrochip />, name: "Banana Pi" },
  { icon: <FaJava />, name: "Java ( Learning )" },
  { icon: <SiGo />, name: "Go ( Learning )" },
];

const TechStack = () => {
  return (
    <div className="px-12 relative py-16">
      <div className=" px-8 bg-white sticky top-24 border border-gray-400 rounded-2xl">
        <div className="">
          <h1 className="py-5 text-three font-medium">
            Frontend Development
          </h1>
          <hr className="border-gray-400 w-full" />
        </div>

        <div className="  w-full flex flex-col md:flex-row items-start md:items-center h-[500px] gap-6">
          {/* Left: description */}
          <div className="md:w-1/2 ">
            <p className="text-one text-justify p-2  ">
              As a Frontend Developer, I craft clean, modern, and interactive
              user interfaces using
              <span className="font-medium text-green-600"> React</span>,
              <span className="font-medium text-green-600"> Next.js</span> and
              <span className="font-medium text-green-600"> Tailwind CSS</span>.
              My focus is on delivering responsive, accessible, and
              performance-driven web experiences that adapt beautifully across
              all devices. I combine design precision with development
              efficiency to ensure every interface feels natural and engaging
              for users.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 gap-4">
            <TechSkills skills={frontendSkills} />
          </div>


        </div>
      </div>

      <div className="px-8 bg-white sticky top-28 border border-gray-400 rounded-2xl mt-6">
        <div className="">
          <h1 className="py-5 text-three font-medium">Backend Development</h1>
          <hr className="border-gray-400 w-full" />
        </div>

        <div className="w-full flex flex-col md:flex-row items-start md:items-center h-[500px] gap-6">
          <div className="md:w-1/2">
            <p className="text-one text-justify p-2  ">
              On the backend, I build robust, scalable, and secure server-side
              applications using
              <span className="font-medium text-green-600"> Node.js</span>,
              <span className="font-medium text-green-600"> Hono</span>, and
              <span className="font-medium text-green-600"> Express.js</span>. I
              integrate
              <span className="font-medium text-green-600"> PostgreSQL</span>,
              <span className="font-medium text-green-600"> MongoDB</span>, and
              <span className="font-medium text-green-600"> Redis </span>
              for reliable data management and use
              <span className="font-medium text-green-600"> Prisma </span>,
              <span className="font-medium text-green-600"> TypeORM </span> for
              efficient ORM workflows. My goal is to design APIs that are fast,
              maintainable, and seamlessly connected with the frontend.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 gap-4">
            <TechSkills skills={backendSkills} />
          </div>
        </div>
      </div>

      <div className=" px-8 bg-white sticky top-32 border border-gray-400 rounded-2xl mt-6">
        <div className="">
          <h1 className="py-5 text-three font-medium">Tools & Other</h1>
          <hr className="border-gray-400 w-full" />
        </div>

        {/* params */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center h-[500px] gap-6">
          <div className="md:w-1/2">
            <p className="text-one text-justify p-2  ">
              I work with tools and environments that enhance productivity,
              reliability, and deployment efficiency. My workflow involves{" "}
              <span className="font-medium text-green-600">Git</span>,
              <span className="font-medium text-green-600"> GitHub</span>, and{" "}
              <span className="font-medium text-green-600">CI/CD</span>
              pipelines for version control and automation. I use{" "}
              <span className="font-medium text-green-600">Docker</span>,{" "}
              <span className="font-medium text-green-600">Linux</span>, and{" "}
              <span className="font-medium text-green-600">AWS </span>
              (EC2, Lambda, S3) for containerization and cloud infrastructure. I
              also have hands-on experience with
              <span className="font-medium text-green-600"> Raspberry Pi </span>
              and{" "}
              <span className="font-medium text-green-600"> Banana Pi </span>
              for building real-time embedded systems and IoT projects.
              Currently, I’m expanding my backend skill set by learning Java and
              Go to explore more versatile and high-performance architectures.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 gap-4">
            <TechSkills skills={devopsSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
