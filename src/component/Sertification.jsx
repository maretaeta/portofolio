/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sertif1 from "../assets/sertif-1.jpg";
import sertif2 from "../assets/sertif-2.jpg";
import sertif3 from "../assets/sertif-3.jpg";
import sertif4 from "../assets/sertif-4.jpg";
import sertif5 from "../assets/sertif-5.jpeg";
import sertif6 from "../assets/sertif-6.png";

const Sertification = () => {
  const data = [
    {
      id: 1,
      img: sertif4,
      title: "Software Engineer at Widya Robotic",
    },
    {
      id: 2,
      img: sertif6,
      title: "Front End Developer at PT. Blantika Kreasi Muda",
    },
    {
      id: 3,
      img: sertif5,
      title: "English Tutor at UMS",
    },
    {
      id: 4,
      img: sertif1,
      title: "Product Manager and UI/UX Student at Binar Academy",
    },
    {
      id: 5,
      img: sertif1,
      title: "Front End Developer Student at Binar Academy",
    },
    {
      id: 6,
      img: sertif2,
      title: "UI/UX at Perempuan Inovasi",
    },
    {
      id: 7,
      img: sertif3,
      title: "UI/UX at Rakamin ID",
    },
  ];

  return (
    <section id="project" className="pt-40 max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-cyan-800">Sertification</h3>
        <p></p>
      </div>
      <div className="relative mt-10 ">
        <Swiper
          spaceBetween={25}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={3}
          className=" max-w-6xl"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="border border-gray-200 rounded-lg shadow overflow-hidden">
                <a href="#">
                  <img
                    className="w-full h-auto rounded-t-lg"
                    src={item.img}
                    alt={item.title}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h3 className="mb-2 text-lg">{item.title}</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev absolute top-1/2 left10 transform -translate-y-1/2 font-extrabold text-cyan-600 z-10"></button>
        <button className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 font-extrabold text-cyan-600 z-10"></button>
      </div>
    </section>
  );
};

export default Sertification;
