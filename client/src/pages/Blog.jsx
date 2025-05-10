import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const base_URL = import.meta.env.VITE_BASE_URL;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`${base_URL}/api/v1/blog/blogs`);
        setPosts(res.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    getPosts();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 container mx-auto">
      <h1 className="opacity-80 text-3xl font-bold text-white bg-gray-600 p-5 w-full h-20 rounded-lg shadow-2xl shadow-blue-950 text-center">
        Explore the Blogs
      </h1>
      <p className="text-gray-300 text-center mt-5 w-full  p-5">
        Welcome to the blog page! Here you can find various articles and posts.
      </p>
      <div className="flex flex-col gap-5 mt-10 w-full h-full p-5 bg-gray-800 rounded-lg shadow-2xl shadow-blue-950">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-700 p-5 rounded-lg shadow-lg shadow-blue-950 flex gap-10"
            onClick={() => {
              navigate(`/blog/${post._id}`);
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-30 h-25 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-white">{post.title}</h2>
              <p className="text-gray-300">{post.content}</p>
              <div>
                <span className="text-gray-300 me-2">
                  {moment(post.createdAt).fromNow()}
                </span>

                <span className="text-gray-300 me-2">by {post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
