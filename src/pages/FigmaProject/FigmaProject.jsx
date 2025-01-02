import whatsapp from "../../assets/Images/WhatsApp.png";
import stock from "../../assets/Images/Stock_Investment_App.png";
import architecture from "../../assets/Images/Information Architecture 10 Minute School.jpg";
import Navbar from "../Navbar/Navbar";

const FigmaProjects = () => {
  const figmaProjects = [
    {
      image: whatsapp,
      title: "WhatsApp Clone",
      description:
        "A meticulously designed UI/UX prototype of a WhatsApp clone crafted using Figma, focusing on user-friendly interfaces and intuitive interactions.",
      features: [
        "User Interface: A clean, modern, and responsive chat interface that replicates WhatsApp's design aesthetics.",
        "UX Flow: Simulated seamless navigation for messaging, profile settings, and notifications.",
      ],
      technologies: ["Figma"],
      link: "https://www.figma.com/design/5qORshNvwyRJ9Io4HBFXeZ/Prototyping?node-id=0-1&t=otIcffF3M5mEsy17-1",
    },
    {
      image: stock,
      title: "Stock Investment App",
      description:
        "A comprehensive design for an Information Stock Management system, created to streamline stock tracking and inventory management. This project emphasizes user-friendly navigation and data visualization.",
      features: [
        "Dashboard Layout: Designed an intuitive dashboard for tracking stock levels, trends, and analytics.",
        "User-Centric Design: Personalized interfaces for both users and admins to manage inventory efficiently.",
      ],
      technologies: ["Figma"],
      link: "https://www.figma.com/design/JE0BOCuyINgiEcF7nrZZ8x/Stock-Investment-App?node-id=0-1&t=QOalFlk9Qnh7tUqN-1",
    },
    {
      image: architecture,
      title: "Information Architecture 10 Minute School",
      description:
        "A thoughtfully crafted information architecture project for 10 Minute School, focusing on the logical structuring of content and user interactions to enhance usability and navigation.",
      features: [
        "Content Hierarchy: Organized and streamlined layout to optimize user flow and accessibility.",
        "User Navigation: Clear pathways for users to explore resources, courses, and features effectively.",
      ],
      technologies: ["Figma"],
      link: "https://www.figma.com/board/kfXCJsoTBFeTP3V7LvLxBi/Information-Architecture-10-Minute-School?node-id=0-1&p=f&t=6UqFZkOaVlUeDQUu-0",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <section className="w-5/6 mx-auto bg-gray-100 dark:bg-gray-900 text-black dark:text-white pt-16 mt-16 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-10">
            {"</Figma Projects>"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {figmaProjects.map((project, index) => (
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
                <ul className="mb-4">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 mb-1"
                    >
                      - {feature}
                    </li>
                  ))}
                </ul>
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

export default FigmaProjects;
