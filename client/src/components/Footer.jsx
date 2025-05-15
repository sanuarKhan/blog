import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 dark:text-gray-200">
            Home
          </Link>
          <Link to="/blogs" className="text-gray-700 dark:text-gray-200">
            Blogs
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-200">
            About
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/" className="text-blue-600">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="/" className="text-blue-400">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/" className="text-pink-500">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/" className="text-gray-900 dark:text-white">
            <i className="fab fa-github"></i>
          </Link>
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SK's Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
