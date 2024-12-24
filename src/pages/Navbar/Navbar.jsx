import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import ThemeToggle from "../../shared/ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav
      id="home"
      className="fixed top-0 left-0 w-full flex flex-wrap justify-between items-center text-black dark:text-white px-10 pt-6 md:px-20 dark:bg-gray-800 bg-white shadow-md z-50"
    >
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 pb-4 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-4`}
      >
        <Link to={"/#home"}>
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Home
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            About
          </li>
        </Link>
        <Link to={"/skill"}>
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Skills
          </li>
        </Link>
        <Link to={"/projects"}>
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Projects
          </li>
        </Link>
        <Link to={"/blog"}>
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Blog
          </li>
        </Link>
        <Link to={""}>
          <li className="text-md transition-all duration-300 p-2 md:p-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-800 hover:text-gray-200">
            Contact
          </li>
        </Link>
      </ul>

      <div>
        <ul className="flex gap-4 mt-4">
          <Link to={"/#home"}>
          <h1 className="text-2xl font-semibold">
            <span className="text-pink-800">Jannatul</span> Ferdous
          </h1>
          </Link>
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
