import me from "../assets/sanuar.png";
export default function About() {
  return (
    <div className="container mx-auto mt-5 p-4 md:p-10 shadow-md rounded-lg flex flex-col md:flex-row gap-6 md:gap-10 bg-gradient-to-bl from-gray-900 to-teal-500 transition-all duration-300 hover:shadow-xl justify-center items-center w-full h-screen">
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          src={me}
          alt="me"
          className="shadow-lg shadow-blue-950 rounded-lg transform transition-transform duration-300 hover:scale-105 max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full md:w-1/2">
        <h2 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-2xl md:text-3xl font-bold mb-4 text-center md:text-left animate-fadeIn">
          A little about me
        </h2>
        <p className="text-gray-800 text-sm md:text-base text-center md:text-left leading-relaxed hover:text-gray-900 transition-colors duration-300">
          Hi, I'm Sanuar Khan — a passionate writer, web developer, and
          dedicated teacher. I love turning ideas into functional, user-friendly
          applications using modern web technologies. When I'm not coding, I'm
          either guiding students toward their academic goals or sharing
          thoughts and tutorials through writing. My mission is to build, teach,
          and inspire — one project, one lesson, and one article at a time
        </p>
        <div className="flex gap-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transform transition-transform duration-300 hover:scale-125"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transform transition-transform duration-300 hover:scale-125"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700 transform transition-transform duration-300 hover:scale-125"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
