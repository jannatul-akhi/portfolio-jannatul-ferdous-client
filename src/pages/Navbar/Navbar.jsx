import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ThemeToggle from "../../shared/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav id="home"  className="section flex flex-wrap justify-between items-center text-black dark:text-white px-10 pt-6 md:px-20">
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 pb-4 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-4`}
      >
        <a href="#home">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-800 hover:text-gray-200">
            Home
          </li>
        </a>
        <a href="#about">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-800 hover:text-gray-200">
            About
          </li>
        </a>
        <a href="#skills">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-800 hover:text-gray-200">
            Skills
          </li>
        </a>
        <a href="#projects">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-800 hover:text-gray-200">
            Projects
          </li>
        </a>
        <a href="#blog">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-800 hover:text-gray-200">
            Blog
          </li>
        </a>
        <a href="#contact">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-800 hover:text-gray-200">
            Contact
          </li>
        </a>
        
      </ul>

      <div>
        <ul className="flex gap-4 mt-4">
          <a href="https://www.facebook.com/profile.php?id=100019176511052">
            <li>
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b6898" />
            </li>
          </a>
          <a href="https://github.com/jannatul-akhi">
            <li>
              <FontAwesomeIcon icon={faGithub} size="2x" color="#d6d4d4" />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jannatul-ferdous-87087221b/">
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b5" />
            </li>
          </a>
          <ThemeToggle></ThemeToggle>
        </ul>
      </div>

      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(!menu)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(!menu)}
        />
      )}
    </nav>
  );
};

export default Navbar;
