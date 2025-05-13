import { Link } from "react-router-dom";
export default function Navber() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <ul className="flex gap-10 justify-center bg-teal-100 shadow-2xl shadow-blue-950 py-3">
        <Link to="/"> Home </Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/about-me"> About Me</Link>
        {token ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </ul>
    </div>
  );
}
