const Experience = () => {
  const experiences = [
    {
      role: "Executive Service Supporter",
      company: "UNITY LAB SOLUTION BD. LTD.",
      duration: "May 2024 - Present",
      tools: "Adobe Acrobat, Excel, Word, e-gp", 
      description:
        "This organization stands for technological solutions for the Education and Analytics sectors. During my tenure, I gained invaluable experience in managing tender-based business processes, fostering professional yet friendly communication with clients, and effectively collaborating with senior team members.",
    },

  ];

  return (
    <section className="text-black dark:text-white mx-auto py-16 px-10 mt-4 animate-slideRight">
      <h2 className="text-4xl font-bold mb-8 text-center">{"</Experience>"}</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-indigo-500 pl-4 space-y-2 animate-fadeIn"
          >
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-lg font-medium">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.tools}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Experience;
