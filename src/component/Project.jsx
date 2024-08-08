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
import ui1 from "../assets/project-10.png";
import ui2 from "../assets/project-11.png"

const data = {
  cardData: [
    {
      id: 9,
      img: flypal,
      title: "Flypal: AirPlane Ticketing",
      category: "Web Development",
      button: "https://flypal.vercel.app/",
    },
    {
      id: 1,
      img: movieApp,
      title: "Movie App",
      category: "Web Development",
      button: "https://movies-pp.vercel.app/",
    },
    {
      id: 2,
      img: BinarCar,
      title: "Car Rental",
      category: "Web Development",
      button: "https://car-rental-binar.vercel.app/",
    },
    {
      id: 3,
      img: todoList,
      title: "Todo List",
      category: "Web Development",
      button: "",
    },

    {
      id: 4,
      img: EducationApp,
      title: "Multipage Education Website",
      category: "Web Development",
      button: "https://education-website-phi-lemon.vercel.app/",
    },
    {
      id: 5,
      img: EatMore,
      title: "Eat More Restaurant",
      category: "Web Development",
      button: "https://eat-more-restaurant.vercel.app/",
    },
    {
      id: 6,
      img: kemenkes,
      title: "Program Belajar Kemenkes",
      category: "Web Development",
      button: "https://project-magang-2.vercel.app/",
    },
    {
      id: 7,
      img: himpunan,
      title: "Himpunan Ahli Kesehatan",
      category: "Web Development",
      button: "",
    },
    {
      id: 8,
      img: careConnect,
      title: "Care Connect",
      category: "Web Development",
      button:
        "https://l200200167.000webhostapp.com/final_project/user_dashboard.php",
    },

    {
      id: 10,
      img: flypal,
      title: "Pershop: Cashier Aplication",
      category: "Web Development",
      button: "",
    },
    {
      id: 11,
      img: flypal,
      title: "ACP : React ts",
      category: "Web Development",
      button: "",
    },
    {
      id: 12,
      img: flypal,
      title: "Pentest Analytic Website",
      category: "Web Development",
      button: "",
    },
    {
      id: 13,
      img: flypal,
      title: "Operational App",
      category: "Web Development",
      button: "",
    },
    {
      id: 14,
      img: flypal,
      title: "Kampung Batik",
      category: "Web Development",
      button: "",
    },
    {
      id: 15,
      img: flypal,
      title: "Company Profile",
      category: "Web Development",
      button: "",
    },
    {
      id: 16,
      img: flypal,
      title: "Bali Car Rental",
      category: "Web Development",
      button: "",
    },
    {
      id: 17,
      img: ui1,
      title: "Holiyay: Landing Page",
      category: "UI/UX",
      button:
        "https://www.figma.com/proto/tT216V4F4obLQvUzuE3wVU/holiyay-webApp?node-id=0-1&t=qPfJMcqwrZrZh5Fg-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    {
      id: 18,
      img: ui2,
      title: "Redesign : DANA",
      category: "UI/UX",
      button: "",
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

  return (
    <section id="project" className="pt-40 max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-cyan-800">
          Here&#39;s What I&#39;ve been Up To
        </h3>
        <p className="text-gray-400 my-3">
          various projects, and my latest achievements.
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
            onClick={() => setFilter("Project Management")}
            className={`px-4 py-2 rounded-lg ${
              filter === "Project Management"
                ? "bg-cyan-800 text-white"
                : "bg-gray-200"
            }`}
          >
            Project Management
          </button>
        </div>
      </div>
      <div className="flex mx-auto justify-between mt-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-2 gap-10 items-center">
          {filteredData()
            .slice(0, count)
            .map((item, index) => (
              <div
                className="max-w-[1240px] border border-gray-200 rounded-lg shadow overflow-hidden"
                key={index}
              >
                <a href="#">
                  <img className="rounded-t-lg" src={item.img} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h3 className="mb-2 text-lg my-4">{item.title}</h3>
                  </a>
                  <div className="flex gap-3 justify-end">
                    <a
                      href={item.button}
                      target="_blank"
                      className="text-white text-sm bg-cyan-800 px-4 py-1 inline-block rounded-xl"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="pt-10">
        <button
          className="btn-more py-3 px-10 grid justify-items-center mx-auto"
          onClick={loadMore}
        >
          {showMore ? "Load More" : "Less More"}
        </button>
      </div>
    </section>
  );
};

export default Project;
