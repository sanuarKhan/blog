import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogGrid from "../components/BlogGrid";
import Hero from "../components/Hero";
const base_URL = import.meta.env.VITE_BASE_URL;

export default function Home() {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const res = await axios.get(`${base_URL}/api/v1/blog/blogs`);
      message.success("Posts fetched successfully");
      setPosts(res.data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      message.error("Error fetching posts");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="mx-auto flex justify-center flex-col w-full min-h-screen bg-gradient-to-bl to-gray-900 from-teal-600 container px-2 sm:px-6">
      <div>{/* <Sidebar /> */}</div>
      <div>
        <h1 className="opacity-80 text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-gray-600 p-5 w-full h-20 rounded-lg shadow-2xl shadow-blue-950 text-center mt-20 animate-fade-in-down">
          Welcome to my blog
        </h1>
        <div className="flex flex-col gap-5 mt-10 w-full h-full p-5 bg-gray-800 rounded-lg shadow-2xl shadow-blue-950">
          <Hero />
          <BlogGrid posts={posts} />
          {/* {posts.map((post, idx) => (
            <div
              key={post._id}
              className={`bg-gray-700 p-5 rounded-lg shadow-lg shadow-blue-950 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-gray-600 animate-fade-in-up`}
              style={{ animationDelay: `${idx * 80}ms` }}
              onClick={() => {
                navigate(`/blog/${post._id}`);
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 transition-transform duration-300 hover:scale-110"
              />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-300 line-clamp-3">{post.content}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      {/* <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.7s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style> */}
    </div>
  );
}
