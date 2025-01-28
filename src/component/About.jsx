
// import aboutImg from "../assets/img2.png";

const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Complate Project", count: "22" },
    { text: "Companies Work", count: "05" },
  ];
  return (
    <section id="about" className="p-10 ">
      <h3 className="text-4xl font-semibold text-cyan-800 text-center">
        {" "}
        About Me
      </h3>
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="text-gray-400 my-3 pt-10">
          <p className="text-justify leading-7 w-11/12">
            I am a bachelors degree in Informatics Engineering with 2 years of
            experience in IT. I have experience working as a Project Manager and
            Frontend Developer in a company. I am highly motivated to
            continuously learn and grow in the IT field, embracing new
            challenges with enthusiasm. My diligence, creativity, and strong
            problem-solving abilities enable me to excel in complex situations.
            Additionally, I possess excellent communication and interpersonal
            skills, allowing me to collaborate effectively within a team
            environment.
          </p>
          <div className="flex mt-8 items-center gap-7 text-center">
            {info.map((content) => (
              <div key={content.text}>
                <h3 className="md:text-4xl text-2xl font-semibold text-wrap text-cyan-800">
                  {content.count}
                  <span className="text-cyan-600"> + </span>
                  {""}
                </h3>
                <span className="md:text-base text-xs text-gray-700">
                  {content.text}
                </span>
              </div>
            ))}
          </div>
          <a href="Project Manager - Mareta Nur Isnaini.pdf" download>
            <button className="btn-primary mt-10">Download CV</button>
          </a>
        </div>

        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          {/* <div className="lg:w-80 h-full relative sm:w-10/12 w-11/12 md:w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
