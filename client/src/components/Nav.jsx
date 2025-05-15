import { Link } from "react-router-dom";

export default function Nav() {
  const token = localStorage.getItem("token");
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="text-2xl font-bold text-blue-900 dark:text-white">
        <Link to="/">SK's Blog</Link>
      </div>
      <ul className="flex gap-6 items-center text-gray-700 dark:text-gray-200">
        <Link to="/blog">Blog</Link>
        <Link to="/about-me">About</Link>
        {token ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <li>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <i className="fa fa-search"></i>
          </button>
        </li>
        <li>
          {/* Dark/Light Mode Toggle */}
          <button className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <i className="fa fa-moon"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}
