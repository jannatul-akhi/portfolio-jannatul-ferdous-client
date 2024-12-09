import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skill from "../pages/Skill/Skill";
import Projects from "../pages/Projects/Projects";
import Blog from "../pages/Blog/Blog";
import Footer from "../pages/Footer/Footer";
import Blog1 from "../components/Blog1/Blog1";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/skill",
      element: <Skill />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/blog",
      element: <Blog />
    },
    {
      path: "/blog1",
      element: <Blog1 />
    },
    {
      path: "/contact",
      element: <Footer />
    },
]);

export default router;