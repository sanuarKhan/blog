import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const base_URL = import.meta.env.VITE_BASE_URL;

console.log(base_URL);

export default function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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
    getPosts();
  }, []);

  return (
    <div className="mx-auto flex justify-center flex-col w-full bg-gradient-to-bl to-gray-900 from-teal-600 container">
      <h1 className="opacity-80 text-3xl font-bold text-white bg-gray-600 p-5 w-full h-20 rounded-lg shadow-2xl shadow-blue-950 text-center mt-20">
        Welcome to my blog
      </h1>
      <div className="flex flex-col gap-5 mt-10 w-full h-full p-5 bg-gray-800 rounded-lg shadow-2xl shadow-blue-950">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-700 p-5 rounded-lg shadow-lg shadow-blue-950 flex gap-10 items-center"
            onClick={() => {
              navigate(`/blog/${post._id}`);
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-30 h-25 object-cover rounded-lg mb-4"
            />
            <div>
              <h2 className="text-xl font-bold text-white">{post.title}</h2>
              <p className="text-gray-300">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
