import img2 from "../../assets/Images/img2.png";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experiences/Experience";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div id="about">
      <Navbar></Navbar>
      <section className="text-black dark:text-white dark:bg-gray-800 mx-auto pt-16 px-32 mt-10 md:w-full">
        <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in hover:animate-pulse">{"</About Me>"}</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center mt-14">
          {/* Left Side - Biography */}
          <div className="flex justify-center items-center relative">
            <div className="border-4 border-gray-700 rounded-md overflow-hidden w-72 h-72 shadow-xl hover:animate-fade-in">
              <img
                src={img2}
                alt="Jannatul Ferdous"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="animate-slideRight hover:animate-slideLeft">
            <h3 className="text-xl font-semibold mb-4">Biography</h3>
            <p className="mb-4">
              Hi, I am jannatul Ferdous, a MERN Stack Developer with a passion
              for creating beautiful and functional digital experiences. With 2+
              years of experience, I’m dedicated to bringing clients’ visions to
              life.
            </p>
            <p className="mb-4">
              Currently working as an Angular Developer, I enjoy challenging
              myself and learning every day. I specialize in creating
              user-centric web applications, mobile apps, and digital products.
            </p>
            <p>
              Let’s connect and create something incredible for your next
              project!
            </p>
          </div>
        </div>
        <Education></Education>
        <Experience></Experience>
      </section>
      
    </div>
  );
};

export default About;
