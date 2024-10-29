/** @format */

import { useState } from "react";
import EducationApp from "../assets/project-1.png";
import EatMore from "../assets/project-2.png";
import movieApp from "../assets/project-3.png";
import BinarCar from "../assets/project-4.png";
import kemenkes from "../assets/project-5.png";
import careConnect from "../assets/project-6.png";
import todoList from "../assets/project-7.png";
import himpunan from "../assets/project-8.png";
import flypal from "../assets/project-9.png";
import batik from "../assets/project-12.png";
import compro from "../assets/project-13.png";
import balirental from "../assets/project-14.png";
import operationalapp from "../assets/project-15.png";
import pentes from "../assets/project-16.png";
import shop from "../assets/project-17.png";
import ui1 from "../assets/project-10.png";
import ui2 from "../assets/project-11.png";
import pm1 from "../assets/pm1.png";
import pm2 from "../assets/pm2.png";

import NoData from "./NoData";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGoogle,
  FaPhp,
} from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoFigma,  } from "react-icons/bi";
import {CgMaze} from "react-icons/cg"
import {
  SiVercel,
  SiRedux,
  SiClickup,
  SiTrello,
  SiNotion,
  SiCodeigniter,
  SiNestjs,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";

const data = {
  cardData: [
    {
      id: 9,
      img: flypal,
      title: "Flypal: AirPlane Ticketing",
      category: "Web Development",
      button: "https://flypal.vercel.app/",
      logos: [
        <FaReact key="react" />,
        <BiLogoTailwindCss key="tailwind css" />,
        <SiRedux key="Redux" />,
        <SiVercel key="Vercel" />,
      ],
    },
    {
      id: 1,
      img: movieApp,
      title: "Movie App",
      category: "Web Development",
      button: "https://movies-pp.vercel.app/",
      logos: [
        <FaReact key="react" />,
        <BiLogoTailwindCss key="tailwind css" />,
        <SiRedux key="Redux" />,
        <SiVercel key="Vercel" />,
      ],
    },
    {
      id: 2,
      img: BinarCar,
      title: "Car Rental",
      category: "Web Development",
      button: "https://car-rental-binar.vercel.app/",
      logos: [
        <FaReact key="react" />,
        <BiLogoTailwindCss key="tailwind css" />,
        <SiRedux key="Redux" />,
        <SiVercel key="Vercel" />,
      ],
    },
    {
      id: 3,
      img: todoList,
      title: "Todo List",
      category: "Web Development",
      button: "",
      logos: [
        <FaReact key="react" />,
        <BiLogoTailwindCss key="tailwind css" />,
      ],
    },
    {
      id: 4,
      img: EducationApp,
      title: "Multipage Education Website",
      category: "Web Development",
      button: "https://education-website-phi-lemon.vercel.app/",
      logos: [
        <FaHtml5 key="HTML" />,
        <FaCss3Alt key="CSS" />,
        <FaJs key="JS" />,
      ],
    },
    {
      id: 5,
      img: EatMore,
      title: "Eat More Restaurant",
      category: "Web Development",
      button: "https://eat-more-restaurant.vercel.app/",
      logos: [<FaReact key="react" />],
    },
    {
      id: 6,
      img: kemenkes,
      title: "Program Belajar Kemenkes",
      category: "Web Development",
      button: "https://project-magang-2.vercel.app/",
      logos: [
        <FaReact key="react" />,
        <BiLogoTailwindCss key="tailwind css" />,
      ],
    },
    {
      id: 7,
      img: himpunan,
      title: "Himpunan Ahli Kesehatan",
      category: "Web Development",
      button: "",
      logos: [
        <FaReact key="react" />,
        <BiLogoTailwindCss key="tailwind css" />,
      ],
    },
    {
      id: 8,
      img: careConnect,
      title: "Care Connect",
      category: "Web Development",
      button:
        "https://l200200167.000webhostapp.com/final_project/user_dashboard.php",
      logos: [
        <FaPhp key="PHP" />,
        <BiLogoTailwindCss key="TailwindCSS" />,
        <FaJs key="JS" />,
      ],
    },
    {
      id: 10,
      img: shop,
      title: "Pershop: Cashier Aplication",
      category: "Web Development",
      button: "",
      logos: [
        <RiVuejsFill key="Vue JS" />,
        <BiLogoTailwindCss key="TailwindCSS" />,
        <SiNestjs key="Nest JS" />,
        <SiPrisma key="Prisma" />,
      ],
    },
    {
      id: 11,
      img: flypal,
      title: "ACP : React ts",
      category: "Web Development",
      button: "",
      logos: [
        <SiTypescript key="TypeScript" />,
        <FaReact key="react" />,
        <BiLogoTailwindCss key="tailwind css" />,
      ],
    },
    {
      id: 12,
      img: pentes,
      title: "Pentest Analytic Website",
      category: "Web Development",
      button: "https://pentest-analysis.vercel.app/",
      logos: [
        <RiVuejsFill key="Vue JS" />,
        <BiLogoTailwindCss key="TailwindCSS" />,
      ],
    },
    {
      id: 13,
      img: operationalapp,
      title: "Operational App",
      category: "Web Development",
      button: "https://manage-operational-app.vercel.app/",
      logos: [
        <RiVuejsFill key="Vue JS" />,
        <BiLogoTailwindCss key="TailwindCSS" />,
        <SiNestjs key="Nest JS" />,
        <SiPrisma key="Prisma" />,
      ],
    },
    {
      id: 14,
      img: batik,
      title: "Kampung Batik",
      category: "Web Development",
      button: "https://kampung-batik.vercel.app/",
      logos: [
        <FaHtml5 key="HTML" />,
        <BiLogoTailwindCss key="TailwindCSS" />,
        <FaJs key="JS" />,
      ],
    },
    {
      id: 15,
      img: compro,
      title: "Company Profile",
      category: "Web Development",
      button: "https://company-profile-4pf6.vercel.app/",
      logos: [
        <FaHtml5 key="HTML" />,
        <BiLogoTailwindCss key="TailwindCSS" />,
        <FaJs key="JS" />,
      ],
    },
    {
      id: 16,
      img: balirental,
      title: "Mooverent : Bali Car Rental",
      category: "Web Development",
      button: "https://mooverentbali.com/",
      logos: [
        <SiCodeigniter key="Code Igniter" />,
        <BiLogoTailwindCss key="TailwindCSS" />,
        <FaJs key="JS" />,
      ],
    },
    {
      id: 17,
      img: ui1,
      title: "Holiyay: Landing Page",
      category: "UI/UX",
      button:
        "https://www.figma.com/proto/tT216V4F4obLQvUzuE3wVU/holiyay-webApp?node-id=0-1&t=qPfJMcqwrZrZh5Fg-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      logos: [<BiLogoFigma key="Figma" />, <SiNotion key="Notion" />],
    },
    {
      id: 18,
      img: ui2,
      title: "Redesign : DANA",
      category: "UI/UX",
      button:
        "https://www.figma.com/proto/WwFGy3S9jduz855naLTxrJ/Challenge-Chapter-5-Eta?node-id=138-781&t=9ecDYtPQfFd6RsoQ-0&scaling=min-zoom&content-scaling=fixed&page-id=8%3A5&starting-point-node-id=135%3A695",
      logos: [
        <BiLogoFigma key="Figma" />,
        <CgMaze key="Maze" />,
        <SiNotion key="Notion" />,
      ],
    },
    {
      id: 19,
      img: pm1,
      title: "Finsera - Banking App",
      category: "ProjectManagement",
      button:
        "https://www.canva.com/design/DAGU61YuRws/1ZGnkGzfBJMO1nEaGGH27w/edit",
      logos: [
        <FaGoogle key="Google Suite" />,
        <SiClickup key="Clickup" />,
        <SiTrello key="Trello" />,
      ],
    },
    {
      id: 20,
      img: pm2,
      title: "Research and Analysis Dana App",
      category: "ProjectManagement",
      button: "https://docs.google.com/presentation/d/1br6X8K4gOxzQLj50c2gNPNS_odKSWsTuiPcbjy-RxyA/edit?usp=sharing",
      logos: [
        <FaGoogle key="Google Suite" />,
        <SiClickup key="Clickup" />,
        <SiTrello key="Trello" />,
      ],
    },
  ],
};

const Project = () => {
  const [count, setCount] = useState(3);
  const [showMore, setShowMore] = useState(true);
  const [filter, setFilter] = useState("All");

  const loadMore = () => {
    if (showMore) {
      if (count + 3 >= filteredData().length) {
        setCount(filteredData().length);
        setShowMore(false);
      } else {
        setCount((prevCount) => prevCount + 3);
      }
    } else {
      if (count - 3 <= 3) {
        setCount(3);
        setShowMore(true);
      } else {
        setCount((prevCount) => prevCount - 3);
      }
    }
  };

  const filteredData = () => {
    return filter === "All"
      ? data.cardData
      : data.cardData.filter((item) => item.category === filter);
  };

  const filteredProjects = filteredData();

  return (
    <section id="project" className="pt-40 max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-cyan-800">
          Here&#39;s What I&#39;ve been Up To
        </h3>
        <p className="text-gray-400 my-3">
          Various projects, and my latest achievements.
        </p>
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-lg ${
              filter === "All" ? "bg-cyan-800 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Web Development")}
            className={`px-4 py-2 rounded-lg ${
              filter === "Web Development"
                ? "bg-cyan-800 text-white"
                : "bg-gray-200"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter("UI/UX")}
            className={`px-4 py-2 rounded-lg ${
              filter === "UI/UX" ? "bg-cyan-800 text-white" : "bg-gray-200"
            }`}
          >
            UI/UX
          </button>
          <button
            onClick={() => setFilter("ProjectManagement")}
            className={`px-4 py-2 rounded-lg ${
              filter === "ProjectManagement"
                ? "bg-cyan-800 text-white"
                : "bg-gray-200"
            }`}
          >
            Project Management
          </button>
        </div>
      </div>
      <div className="flex mx-auto justify-between mt-10">
        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-2 gap-10 items-center">
            {filteredProjects.slice(0, count).map((item) => (
              <div
                className="max-w-[1240px] border border-gray-200 rounded-lg shadow overflow-hidden"
                key={item.id}
              >
                <a href={item.button} target="_blank" rel="noopener noreferrer">
                  <img
                    className="rounded-t-lg"
                    src={item.img}
                    alt={item.title}
                  />
                </a>
                <div className="p-5">
                  <a
                    href={item.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="mb-2 text-lg my-4">{item.title}</h3>
                  </a>
                  <div className="flex gap-3 mb-4 pt-5">
                    {item.logos.length > 0 ? (
                      item.logos.map((logo, idx) => (
                        <div key={idx} className="text-2xl text-cyan-900">
                          {logo}
                        </div>
                      ))
                    ) : (
                      <span>No logos provided</span>
                    )}
                  </div>
                  <div className="flex gap-3 justify-end">
                    <a
                      href={item.button}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm bg-cyan-800 px-4 py-1 inline-block rounded-xl"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
      <div className="pt-10">
        {filteredProjects.length > 3 && (
          <button
            className="btn-more py-3 px-10 grid justify-items-center mx-auto"
            onClick={loadMore}
          >
            {showMore ? "Load More" : "Show Less"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Project;
