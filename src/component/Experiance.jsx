/** @format */

const experiences = [
  {
    date: "November 2024 - Now",
    title: "Junior Project Manager",
    company: "Refactory - Sleman, Yogyakarta",
  },
  {
    date: "April - August 2024",
    title: "Front End Developer",
    company: "Inpetra ID - Denpasar, Bali",
  },
  {
    date: "March - August 2024",
    title: "Product Management and UI/UX Design Student",
    company: "Binar Academy - Online",
  },
  {
    date: "August - December 2023",
    title: "Software Engineer",
    company: "Widya Robotic - Sleman, Yogyakarta",
  },
  {
    date: "March - June 2023",
    title: "Front End Developer",
    company: "PT. Blantika Kreasi Muda - Tangerang, Jakarta",
  },
  {
    date: "Feb - June 2023",
    title: "Front End JavaScript Student",
    company: "Binar Academy - Online",
  },
  {
    date: "August 2021 - December 2022",
    title: "Tutor English Program at LBPU UMS",
    company: "LPBIU UMS - Surakarta, Jawa Tengah",
  },
  {
    date: "June - September 2019",
    title: "Operational Staff",
    company: "PT. Bukaloka Teknologi Indonesia - Denpasar, Bali",
  },
];

const Experience = () => {
  return (
    <section
      id="skills"
      className="pt-40 relative flex flex-row gap-48 items-center justify-center max-w-7xl mx-auto pb-10"
    >
      <div className="flex flex-col justify-center items-center mt-8 text-gray-100 text-center w-1/2">
        <h3 className="text-4xl font-semibold text-cyan-900">Experience</h3>
        <p className="text-gray-400 my-3">
          My experience at this company and bootcamp has provided valuable
          insights and deep practical skills.
        </p>
      </div>
      <div className="flex-1">
        <ol className="relative border-l border-gray-200">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg
                  className="w-2.5 h-2.5 text-blue-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                {exp.date}
              </time>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-800">
                {exp.company}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
