import img1 from "../../assets/Images/jannat1.png";
import resume from "../../assets/Resume/jannatul_ferdous.pdf"
import { useState, useEffect } from "react";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const text = "Frontend Web Developer";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 100); // Adjust typing speed here (in milliseconds)

            return () => clearTimeout(timeout);
        } else {
            // Pause before restarting
            const resetTimeout = setTimeout(() => {
                setDisplayText("");
                setIndex(0);
            }, 1500); // Adjust pause duration before restarting

            return () => clearTimeout(resetTimeout);
        }
    }, [index, text]);

  return (
    <div id="home">
      <Navbar></Navbar>
      <section className="w-5/6 mx-auto rounded-lg hero flex flex-col-reverse lg:flex-row items-center justify-between py-10 px-4 lg:px-20  text-white mt-14 dark:bg-gray-800">
      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-7 animate-slideRight">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          <span className=" text-pink-800 ">Hi!</span> I am{" "}
          <span className=" text-pink-800">Jannatul</span> Ferdous
        </h1>
        <div className="typing-effect text-xl font-semibold">
            <h3 className="text-2xl text-black dark:text-white">I am a <span className="text-pink-800 font-semibold">{displayText}</span><span className="blink">|</span></h3>
            
        </div>
        <p className="text-sm text-gray-600 md:text-lg leading-relaxed dark:text-white">
          Exploring my latest projects and articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="">
        <ul className="flex gap-4 mt-4">
          <a href="https://www.facebook.com/profile.php?id=100019176511052">
            <li>
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-pink-800 hover:text-3xl"/>
            </li>
          </a>
          <a href="https://github.com/jannatul-akhi">
            <li>
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-pink-800 hover:text-3xl" />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jannatul-ferdous-87087221b/">
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-pink-800 hover:text-3xl" />
            </li>
          </a>
        </ul>
      </div>
        <div className="flex space-x-4 mt-5">
          <a
            href={resume}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
            target="_blank"
            rel=""
          >
            Resume
          </a>
          <a
            href="/contact"
            className="px-6 py-2 bg-transparent border-2 border-pink-800 dark:border-white text-pink-800 dark:text-white rounded-full hover:bg-pink-800 hover:text-black"
          >
            Contact
          </a>
        </div>
        
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0 animate-slideLeft hover:animate-bounce">
        <img
          src={img1} // replace with your actual image URL
          alt="Jannatul Ferdous"
          className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
    </div>
  );
};

export default Home;
