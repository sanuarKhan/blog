import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
const base_URL = import.meta.env.VITE_BASE_URL;

export default function DashBoard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${base_URL}/api/v1/user/myblogs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.data);
        const data = await response.json();
        if (response.ok) {
          setBlogs(data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, []);

  return (
    <div className="container mx-auto pt-8 min-h-screen w-full flex flex-col md:flex-row gap-8 justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 mb-8 md:mb-0">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-tight">
            Dashboard
          </h2>
          <nav>
            <ul className="flex flex-row md:flex-col gap-4">
              <Link
                to="/create"
                className="transition-all hover:bg-blue-600 hover:text-white bg-white/20 text-white font-medium py-2 rounded-lg text-center shadow"
              >
                Create Blog
              </Link>
              <Link
                to="/my-blogs"
                className="transition-all hover:bg-blue-600 hover:text-white bg-white/20 text-white font-medium py-2 rounded-lg text-center shadow"
              >
                My Blogs
              </Link>
              <Link
                to="/profile"
                className="transition-all hover:bg-blue-600 hover:text-white bg-white/20 text-white font-medium py-2 rounded-lg text-center shadow"
              >
                My Profile
              </Link>
              <Link
                to="/settings"
                className="transition-all hover:bg-blue-600 hover:text-white bg-white/20 text-white font-medium py-2 rounded-lg text-center shadow"
              >
                Settings
              </Link>
              <Link
                to="/login"
                className="transition-all hover:bg-red-600 hover:text-white bg-white/20 text-white font-medium py-2 rounded-lg text-center shadow"
                onClick={() => localStorage.clear()}
              >
                Logout
              </Link>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Main Content */}
      <main className="w-full md:w-3/4 flex flex-col md:flex-row gap-6 h-full">
        <section className="flex-1 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h4 className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
            Recent Blog
          </h4>
          {loading ? (
            <div className="flex-1 flex items-center justify-center text-gray-300">
              Loading...
            </div>
          ) : blogs.length > 0 ? (
            <BlogCard blog={blogs[0]} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-300">
              No recent blogs
            </div>
          )}
        </section>
        <section className="flex-1 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h4 className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
            Comments
          </h4>
          <div className="flex-1 flex items-center justify-center text-gray-300">
            No comments
          </div>
        </section>
        <section className="flex-1 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h4 className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
            Stats
          </h4>
          <div className="flex-1 flex items-center justify-center text-gray-300">
            No stats
          </div>
        </section>
      </main>
    </div>
  );
}
