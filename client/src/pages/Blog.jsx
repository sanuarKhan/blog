import axios from "axios";
import { useEffect, useState } from "react";
import BlogGrid from "../components/BlogGrid";
const base_URL = import.meta.env.VITE_BASE_URL;

export default function Blog() {
  const [posts, setPosts] = useState([]);

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
    <div className="flex flex-col  w-full  py-10 container mx-auto">
      <h1 className="opacity-80 text-3xl font-bold text-white ng-gradient-to-bl to-gray-900 from-gray-400 p-5 w-full h-20 rounded-lg shadow-2xl shadow-blue-950 text-center">
        Explore the Blogs
      </h1>
      <p className="text-gray-300 text-center mt-5 w-full  p-5">
        Welcome to the blog page! Here you can find various articles and posts.
      </p>
      <div className="flex flex-wrap justify-between gap-5 mt-10 w-full  p-5 bg-gradient-to-bl to-gray-950 from-gray-600  rounded-lg shadow-2xl shadow-blue-950">
        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <p className="text-gray-300 text-center mx-auto">
            write is sleeping before writing
          </p>
        )}
      </div>
    </div>
  );
}
