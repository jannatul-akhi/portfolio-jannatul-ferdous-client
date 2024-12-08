import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import ThemeToggle from "../../shared/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav id="home"  className="section flex flex-wrap justify-between items-center text-black dark:text-white px-10 pt-6 md:px-20 dark:bg-gray-800">
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 pb-4 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-4`}
      >
        <a href="#home">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Home
          </li>
        </a>
        <a href="#about">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            About
          </li>
        </a>
        <a href="#skills">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Skills
          </li>
        </a>
        <a href="#projects">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Projects
          </li>
        </a>
        <a href="#blog">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Blog
          </li>
        </a>
        <a href="#footer">
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Contact
          </li>
        </a>
        
      </ul>

      <div>
        <ul className="flex gap-4 mt-4">
          
          <h1 className="text-2xl font-semibold">
            <span className="text-pink-800">Jannatul</span> Ferdous
          </h1>
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
