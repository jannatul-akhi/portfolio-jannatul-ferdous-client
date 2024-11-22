const Blog = () => {
  const blogs = [
    {
      title: "Exploring Modern JavaScript Features",
      description:
        "Learn about the latest JavaScript features and how they can simplify your development process.",
      date: "November 12, 2024",
      image: "https://via.placeholder.com/600x400", // Replace with actual image
      link: "/blog/javascript-features",
    },
    {
      title: "Building Responsive Web Apps",
      description:
        "A guide to creating stunning, mobile-friendly web apps using modern CSS frameworks.",
      date: "October 20, 2024",
      image: "https://via.placeholder.com/600x400", // Replace with actual image
      link: "/blog/responsive-web",
    },
    {
      title: "Demystifying GraphQL",
      description:
        "An introduction to GraphQL and how it can improve your API development workflow.",
      date: "September 28, 2024",
      image: "https://via.placeholder.com/600x400", // Replace with actual image
      link: "/blog/graphql-intro",
    },
  ];

  return (
    <div id="blog" className="section">
      <section className="w-5/6 mx-auto bg-gray-100 dark:bg-gray-900 py-16">
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
                  <a
                    href={blog.link}
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    Read More &rarr;
                  </a>
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
  