import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Skill from "./pages/Skill/Skill";
import Footer from "./pages/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import FigmaProjects from "./pages/FigmaProject/FigmaProject";

function App() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen pt-[72px]">
        
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Skill></Skill>
        <FigmaProjects></FigmaProjects>
        <Projects></Projects>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
