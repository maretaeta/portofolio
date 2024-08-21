/** @format */

import img from "../assets/nofound.png";

const NoData = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
      <img src={img} className="w-80" />
      <p className="mt-5">Project in Progress</p>
    </div>
  );
};

export default NoData;
