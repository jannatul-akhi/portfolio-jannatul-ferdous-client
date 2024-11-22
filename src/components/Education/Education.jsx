

const Education = () => {
    return (
        <section className="text-black dark:text-white mx-auto md:mx-0 py-16 px-6 md:px-0 mt-4 animate-slideDown">
          <h2 className="text-4xl font-bold mb-4 text-center">{"</Education>"}</h2>
          <div className="max-w-7xl md:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 ">
            {/* Degree 1 */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-l-4 border-indigo-500 hover:animate-scaleUp">
              <h3 className="text-2xl font-semibold mb-2">Bachelors in Computer Science</h3>
              <p className="text-md text-gray-600 dark:text-gray-300">
                <strong>Institution:</strong> Daffodil International University <br />
                <strong>Duration:</strong> 2020 - 2024 <br />
                <strong>Result:</strong> 3.82 out of 4
              </p>
              <p className="mt-2">
                Graduated with honors, focusing on Web development, data structures, and algorithms. Actively participated in coding competitions and research projects. Works on some academic projects.
              </p>
            </div>
    
            {/* Degree 2 */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-l-4 border-pink-500 hover:animate-scaleUp">
              <h3 className="text-2xl font-semibold mb-2">Higher Secondary Certificate</h3>
              <p className="text-md text-gray-600 dark:text-gray-300">
                <strong>Institution:</strong> Adamjee Cantonment College <br />
                <strong>Duration:</strong> 2017 - 2018 <br />
                <strong>Result:</strong> 5 out of 5
              </p>
              <p className="mt-2">
                Achieved a strong foundation in mathematics and computer science laying the groundwork for a career in technology.
              </p>
            </div>
            {/* Degree 3 */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-l-4 border-indigo-500 hover:animate-scaleUp">
              <h3 className="text-2xl font-semibold mb-2">Secondary School Certificate</h3>
              <p className="text-md text-gray-600 dark:text-gray-300">
                <strong>Institution:</strong> Saidpur Cantonment Public School and College <br />
                <strong>Duration:</strong> 2015 - 2016 <br />
                <strong>Result:</strong> 5 out of 5
              </p>
              <p className="mt-2">
                Achieved a strong foundation in mathematics and computer science, laying the groundwork for a career in technology.
              </p>
            </div>
          </div>
        </section>
      );
};

export default Education;