/** @format */

const Experiance = () => {
  return (
    <div className="min-h-screen flex items-center max-w-7xl mx-auto">
      <div className="text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <h3 className="text-4xl font-semibold text-cyan-800">Experience</h3>
            <p className="pt-2 text-gray-500">
              My experience at this company and bootcamp has provided valuable
              insights and deep practical skills.
            </p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-cyan-900 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-cyan-900 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Software Engginer at Widya Robotic
                    </h4>
                    <p className="list-disc text-sm md:text-base leading-snug text-slate-400 text-opacity-100">
                      August - December 2023
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      FrontEnd Developer at PT. Blantika Kreasi Muda
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-slate-400 text-opacity-100">
                      March - Juni 2023
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Tutor English Program at LBPU UMS
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-slate-400 text-opacity-100">
                      
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">
                      Operatinal Staff at PT. Bukaloka Teknologi Indonesia
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-slate-400 text-opacity-100">
                      Jun - September 
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
