import javascript from "../../assets/Images/javascript.jpg";

const Blog1 = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Exploring Modern JavaScript Features
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">November 12, 2024</p>
      <img
        src={javascript}
        alt="JavaScript"
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <p className="text-gray-800 dark:text-gray-200 mb-4">
        JavaScript, the cornerstone of modern web development, has evolved
        significantly over the years. With the introduction of ECMAScript (ES6
        and beyond), developers now have access to a powerful suite of features
        that enhance code readability, efficiency, and maintainability. Here’s
        a brief overview of some standout features:
      </p>

      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        1. Arrow Functions
      </h2>
      <p className="text-gray-800 dark:text-gray-200 mb-4">
        Arrow functions provide a more concise syntax for writing functions,
        making the code cleaner and easier to read. They also automatically
        bind the <code>this</code> context, avoiding common scoping issues.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
        <code className="text-gray-800 dark:text-gray-200">
          {`// Traditional Function
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow Function
const greet = (name) => \`Hello, \${name}!\`;`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        2. Template Literals
      </h2>
      <p className="text-gray-800 dark:text-gray-200 mb-4">
        Template literals simplify string manipulation with embedded expressions
        and multi-line strings.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
        <code className="text-gray-800 dark:text-gray-200">
          {`const name = "Jannat";
const message = \`Welcome, \${name}! Today's date is \${new Date().toLocaleDateString()}.\`;`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        3. Destructuring Assignment
      </h2>
      <p className="text-gray-800 dark:text-gray-200 mb-4">
        Destructuring allows you to unpack values from arrays or objects into
        distinct variables, reducing redundancy.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
        <code className="text-gray-800 dark:text-gray-200">
          {`const user = { name: "Jannat", age: 25, role: "Frontend Developer" };
const { name, role } = user;
console.log(\`\${name} is a \${role}.\`);`}
        </code>
      </pre>

      {/* Add sections for other features similarly */}
    </div>
  );
};

export default Blog1;
