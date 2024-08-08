
import hero from "../assets/img.png";

const Hero = () => {
   const social_media = [
     "logo-instagram",
     "logo-linkedin",
     "logo-github",
     "mail-outline",
   ];
  
  return (
    <section
      id="home"
      className="min-h-screen flex md:flex-row flex-col items-center "
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="w-80 object-cover" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hi There!
            </span>{" "}
            <br />
            I&#39;m <span>Mareta Nur Isnaini</span>
          </h1>
          <h4 className="md:text-lg text-md md:leading-normal leading-5 mt-4 font-bold text-gray-400">
            Im Interested in Front End Developer, Web Developer, Quality
            Assurance and Product Manager
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-cyan-800 cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
