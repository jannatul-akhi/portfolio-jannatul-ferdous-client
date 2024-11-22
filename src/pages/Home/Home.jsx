import img1 from "../../assets/Images/jannat1.png";
import resume from "../../assets/Resume/jannatul_ferdous.pdf"

const Home = () => {
  return (
    <section className="w-5/6 mx-auto rounded-lg hero flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4 lg:px-20 dark:bg-gradient-to-r from-pink-700 to-indigo-700 text-white mt-5 ">
      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-7 animate-slideRight">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          <span className="dark:text-black text-pink-800 ">Hi!</span> I am{" "}
          <span className="dark:text-indigo-950 text-pink-800">Jannatul</span> Ferdous
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-black dark:text-white">
          As a skilled MERN-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="flex space-x-4 mt-5">
          <a
            href={resume}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-700"
            target="_blank"
            rel=""
          >
            Resume
          </a>
          <a
            href="/contact"
            className="px-6 py-2 bg-transparent border-2 border-pink-800 dark:border-white text-pink-800 dark:text-white rounded-full hover:bg-white hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0 animate-slideLeft">
        <img
          src={img1} // replace with your actual image URL
          alt="Jannatul Ferdous"
          className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
