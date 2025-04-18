import car from "../../assets/project-image/GlideWash.png";
import travel from "../../assets/Images/travel.jpg";
import aero from "../../assets/Images/GoAero.jpg";
import bistro from "../../assets/project-image/bistro-boss.png";
import perfumeShop from "../../assets/project-image/perfume-shop.png";
import elegant from "../../assets/project-image/elegant-international.png";
import smileHealth from "../../assets/project-image/smile-health.png";
import Navbar from "../Navbar/Navbar";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./projectsStyle.css";

// import required modules
import {
  Navigation,
  FreeMode,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const Projects = () => {
  const projectList = [
    {
      image: bistro,
      title: "Bistro Boss",
      description:
        "A full-stack restaurant management system that allows users to manage their restaurant operations efficiently.",
      technologies: ["React", "TailwindCSS", "Express.js", "MongoDB"],
      link: "https://bistro-boss-fd747.web.app/",
    },
    {
      image: travel,
      title: "Travel Tips",
      description:
        "A community-driven web application for sharing travel stories, tips, and exclusive content with an interactive UI.",
      technologies: [
        "React",
        "Node.js",
        "TailwindCSS",
        "MongoDB",
        "Express.js",
      ],
      link: "https://travel-tips-and-destination-guide-client.vercel.app/",
    },
    {
      image: car,
      title: "GlideWash",
      description:
        "A full-stack car wash service management system that allows users to book car wash services online.",
      technologies: [
        "React",
        "TailwindCSS",
        "Express.js",
        "MongoDB",
        "Express.js",
      ],
      link: "https://car-wash-client-three.vercel.app/",
    },

    {
      image: elegant,
      title: "Elegant International",
      description:
        "Elegant International is a reputable import-export and trading house with a strong global network.",

      technologies: ["React", "TailwindCSS"],
      link: "https://elegant-international.vercel.app/",
    },
    {
      image: smileHealth,
      title: "Smile Health Thailand",
      description:
        "Smile Health Thailand, provides smart solutions for healthcare management, enabling providers to deliver efficient, patient-centered care in Thailand.",
      technologies: ["React", "TailwindCSS"],
      link: "https://smile-health.vercel.app/",
    },
    {
      image: perfumeShop,
      title: "Perfume Shop",
      description:
        "An E-Commerce website for a perfume shop, showcasing a wide range of fragrances and allowing users to browse and purchase products online.",
      technologies: ["React", "TailwindCSS"],
      link: "https://perfume-shop-liard.vercel.app/",
    },
    {
      image: aero,
      title: "GoAero",
      description:
        "A full-stack web application enabling users to search, view, and book flights while allowing admin-level management of flights and bookings.",
      technologies: ["React", "TailwindCSS", "Express.js", "MongoDB"],
      link: "https://lucky-bombolone-991dd3.netlify.app/",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <section className="w-5/6 mx-auto bg-gray-100 dark:bg-gray-900 text-black dark:text-white pt-16 mt-16 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-10">
            {"</Projects>"}
          </h2>

          <Swiper
            slidesPerView={3}
            navigation={true}
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={{ enabled: true }}
            modules={[FreeMode, Pagination, Mousewheel, Navigation, Keyboard]}
            className="mySwiper"
          >
            {projectList.map((card, index) => (
              <SwiperSlide key={index} className="rounded-lg mb-14">
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col h-full"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="mb-4 flex-grow">{card.description}</p>
                  <ul className="flex gap-2 mb-4 flex-wrap">
                    {card.technologies.map((tech, idx) => (
                      <li
                        key={idx}
                        className="bg-pink-500 text-white text-sm px-2 py-1 rounded-lg"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-bold mt-auto"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Projects;
