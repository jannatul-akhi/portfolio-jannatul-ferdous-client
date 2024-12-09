import car from "../../assets/Images/car-wash.jpg"
import travel from "../../assets/Images/travel.jpg"
import aero from "../../assets/Images/GoAero.jpg"
import Navbar from "../Navbar/Navbar";

const Projects = () => {
  const projectList = [
    {
      image: car,
      title: "Car-Wash",
      description:
        "A Full-stack car washing management system, allowed users to book slots for existing services.",
      technologies: ["React","TailwindCSS", "Express.js", "MongoDB"],
      link: "https://car-wash-client-three.vercel.app/",
    },
    {
      image: travel,
      title: "Travel Tips",
      description:
        "A community-driven web application for sharing travel stories, tips, and exclusive content with an interactive UI.",
      technologies: ["React","Node.js", "TailwindCSS"],
      link: "https://travel-tips-and-destination-guide-client.vercel.app/",
    },
    {
      image: aero,
      title: "GoAero",
      description:
        "A full-stack web application enabling users to search, view, and book flights while allowing admin-level management of flights and bookings.",
      technologies: ["React", "TailwindCSS"],
      link: "https://lucky-bombolone-991dd3.netlify.app/",
    },
  ];

  return (
    <div >
      <Navbar></Navbar>
      <section className="w-5/6 mx-auto bg-gray-100 dark:bg-gray-900 text-black dark:text-white pt-16 mt-16 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-10">
            {"</Projects>"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <ul className="flex gap-2 mb-4 flex-wrap">
                  {project.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-pink-500 text-white text-sm px-2 py-1 rounded-lg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 font-bold"
                >
                  View Project &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
