import me from "../assets/sanuar.png";
export default function About() {
  return (
    <div className="container mx-auto mt-5 p-10 shadow-md rounded-lg flex gap-10 bg-gradient-to-bl from-teal-500  to-lime-200">
      <div className="flex justify-center items-center w-100">
        <img src={me} alt="me" className="shadow-lg shadow-blue-950" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-100">
        <h2 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-3xl font-bold mb-4">
          A little about me
        </h2>
        <p className="text-gray-800">
          Hi, I’m Sanuar Khan — a passionate writer, web developer, and
          dedicated teacher. I love turning ideas into functional, user-friendly
          applications using modern web technologies. When I’m not coding, I’m
          either guiding students toward their academic goals or sharing
          thoughts and tutorials through writing. My mission is to build, teach,
          and inspire — one project, one lesson, and one article at a time
        </p>
        <div className="flex gap-4">
          <span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </span>
          <span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
