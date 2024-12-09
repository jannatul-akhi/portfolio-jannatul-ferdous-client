import javascript from "../../assets/Images/javascript.jpg"
import responsive from "../../assets/Images/responsive.jpg"
import nextjs from "../../assets/Images/nextjs.jpg"
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      title: "Exploring Modern JavaScript Features",
      description:
        "JavaScript has come a long way, evolving into a language full of powerful features that make coding cleaner, faster, and more efficient. Let’s explore some modern JS features you can start using today!",
      date: "November 12, 2024",
      image: javascript, // Replace with actual image
      link: "/blog/javascript-features",
    },
    {
      title: "Building Responsive Web Apps",
      description:
        "In today’s mobile-first world, building responsive web apps isn’t optional; it’s essential. Let’s dive into best practices and tools to create stunning web apps that look great on any screen size.",
      date: "October 20, 2024",
      image: responsive, // Replace with actual image
      link: "/blog/responsive-web",
    },
    {
      title: "Exploring Next.js: The Go-To Framework for Modern Web Development",
      description:
        "Next.js has taken the web development world by storm, offering features like server-side rendering and static site generation out of the box. Here’s why it’s the perfect choice for modern web apps.",
      date: "September 28, 2024",
      image: nextjs, // Replace with actual image
      link: "/blog/graphql-intro",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <section className="w-5/6 mx-auto bg-gray-100 dark:bg-gray-900 py-16 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in">
        {"</Blogs>"}
        </h2>
        <div className="flex flex-col gap-8 ">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-1/3 object-cover"
              />
              <div className="p-6 md:p-8 flex flex-col justify-between border-l-4 border-indigo-500 animate-slideLeft">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {blog.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </span>
                  <Link to={"./blog1"} className="text-blue-500 dark:text-blue-400 hover:underline">
                  
                    Read More &rarr;
                
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
  };
  
  export default Blog;
  