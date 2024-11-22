
import htmlImg from "../../assets/Images/html2.png"
import cssImg from "../../assets/Images/css.png"
import tailwindImg from "../../assets/Images/tailwind.png"
import tsImg from "../../assets/Images/ts.png"
import jsImg from "../../assets/Images/js.png"
import bootstrapImg from "../../assets/Images/bootstrap.jpeg"
import figmaImg from "../../assets/Images/figma.png"
import reactImg from "../../assets/Images/react.png"
import gitImg from "../../assets/Images/git.png"
import githubImg from "../../assets/Images/GitHub.png"
import expressImg from "../../assets/Images/express.png"
import mongodbImg from "../../assets/Images/mongodb.png"

const Skill = () => {
  

  return (


    <div id="skills" className="section w-5/6 mx-auto rounded-lg lg:flex-row items-center justify-between pt-10 px-4 lg:px-20 text-black dark:bg-gradient-to-r from-indigo-700 to-pink-700 dark:text-white mt-5 pb-10">
      <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in hover:animate-ping">
        {"</Skills>"}
      </h2>
      <h4 className="text-xl font-bold text-black dark:text-gray-200 mt-5 animate-slideLeft text-center">Technological Skills</h4>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {[
          { img: htmlImg, name: "HTML" },
          { img: cssImg, name: "CSS" },
          { img: tailwindImg, name: "Tailwind CSS" },
          { img: bootstrapImg, name: "Bootstrap" },
          { img: jsImg, name: "JavaScript" },
          { img: tsImg, name: "TypeScript" },
          { img: reactImg, name: "React" },
          { img: expressImg, name: "Express.js" },
          { img: mongodbImg, name: "MongoDB" },
          { img: figmaImg, name: "Figma" },
          { img: gitImg, name: "Git" },
          { img: githubImg, name: "GitHub" },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center dark:border-none gap-2 p-2 rounded-lg mx-4 transition-transform duration-300 animate-bounce-in hover:animate-bounce"
          >
            <img className="w-8 h-8" src={skill.img} alt={skill.name} />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>

      <h4 className="text-xl font-bold dark:text-gray-200 text-center mt-10 animate-slideLeft text-black mb-5">Soft Skills</h4>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 animate-bounce-in">
        <h5 className="text-md font-bold border border-black dark:border-white  p-4 rounded-lg text-center animate-fade-in hover:animate-bounce">Time Management</h5>
        <h5 className="text-md font-bold border border-black dark:border-white  p-4 rounded-lg text-center animate-fade-in hover:animate-bounce">Communication</h5>
        <h5 className="text-md font-bold border border-black dark:border-white p-4 rounded-lg text-center animate-fade-in hover:animate-bounce">Problem Solving</h5>
        <h5 className="text-md font-bold border border-black dark:border-white p-4 rounded-lg text-center animate-fade-in hover:animate-bounce">Quick Learner</h5>

      </div>
      
      
    </div>

  );
};

export default Skill;
