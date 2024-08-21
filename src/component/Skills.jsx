/** @format */

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGithub,
  FaPhp,
  FaDatabase,
  FaFigma,
  FaBootstrap,
  FaTrello, 
  FaMicrosoft, 
} from "react-icons/fa";
import {
  SiNestjs,
  SiTailwindcss,
  SiPrisma,
  SiPostman,
  SiXampp,
  SiNotion, 
  SiClickup,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  return (
    <section
      id="skills"
      className="pt-40 relative flex flex-row gap-40 items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold text-cyan-900">Tools & Skills</h3>
        <p className="text-gray-400 my-3">
          I have the ability to use and implement these tools
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-14 mt-8 text-gray-100 text-center">
        {[
          { Icon: FaHtml5, label: "HTML", color: "text-orange-600" },
          { Icon: FaCss3Alt, label: "CSS", color: "text-blue-400" },
          { Icon: FaJsSquare, label: "JavaScript", color: "text-yellow-400" },
          { Icon: FaNodeJs, label: "Node JS", color: "text-green-600" },
          { Icon: FaReact, label: "React JS", color: "text-teal-500" },
          { Icon: FaVuejs, label: "Vue JS", color: "text-green-800" },
          { Icon: SiNestjs, label: "Nest JS", color: "text-red-600" },
          { Icon: SiPrisma, label: "Prisma ORM", color: "text-cyan-900" },
          { Icon: FaPhp, label: "PHP", color: "text-blue-700" },
          { Icon: SiTailwindcss, label: "Tailwind", color: "text-teal-400" },
          { Icon: FaBootstrap, label: "Bootstrap", color: "text-purple-500" },
          { Icon: FaDatabase, label: "SQL", color: "text-gray-800" },
          { Icon: VscVscode, label: "VSCode", color: "text-cyan-700" },
          { Icon: FaGithub, label: "GitHub", color: "text-gray-800" },
          { Icon: FaFigma, label: "Figma", color: "text-gray-800" },
          { Icon: SiPostman, label: "Postman", color: "text-orange-600" },
          {
            Icon: BiLogoPostgresql,
            label: "PostgreSQL",
            color: "text-cyan-900",
          },
          { Icon: SiXampp, label: "XAMPP", color: "text-orange-600" },
          { Icon: SiNotion, label: "Notion", color: "text-black" }, 
          { Icon: FaTrello, label: "Trello", color: "text-blue-500" }, 
          { Icon: SiClickup, label: "ClickUp", color: "text-purple-700" }, 
          { Icon: FaMicrosoft, label: "Microsoft", color: "text-blue-600" }, 
        ].map(({ Icon, label, color }, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-6xl ${color}`}
          >
            <Icon />
            <p className="text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
