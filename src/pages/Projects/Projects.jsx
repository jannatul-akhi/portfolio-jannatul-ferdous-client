

const Projects = () => {
    const projectList = [
        {
            image:"../../assets/Images/IMG_20230228_232511_374.jpg",
          title: "E-Commerce Platform",
          description:
            "A full-stack e-commerce platform with features like user authentication, product filtering, and a dynamic shopping cart.",
          technologies: ["React", "Node.js", "MongoDB"],
          link: "https://github.com/jannatul-akhi/e-commerce-platform",
        },
        {
          title: "Portfolio Website",
          description:
            "A personal portfolio showcasing my skills, experience, and projects with an interactive UI.",
          technologies: ["React", "TailwindCSS"],
          link: "https://github.com/jannatul-akhi/portfolio",
        },
        {
          title: "Task Management App",
          description:
            "A task management app with drag-and-drop functionality and real-time updates using WebSocket.",
          technologies: ["React", "Firebase"],
          link: "https://github.com/jannatul-akhi/task-manager",
        },
      ];
    
      return (
        <div id="projects" className="section">
          <section className="w-5/6 mx-auto bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-16 animate-slideDown">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold text-center mb-10">{"</Projects>"}</h2>
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
                  <ul className="flex gap-2 mb-4">
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