import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const base_URL = import.meta.env.VITE_BASE_URL;

export default function SingleBlog() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        setLoading(true);
        // Fetch the post data from the API using the post ID
        const res = await axios.get(`${base_URL}/api/v1/blog/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            id,
          },
        });
        setPost(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };
    getSinglePost();
  }, []);
  return (
    <div className="container mx-auto py-10 bg-gray-700">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="text-3xl font-bold text-white">{post.title}</h2>
          <p className="text-white">{post.content}</p>
          <img src={post.image} alt={post.title} />
        </div>
      )}
    </div>
  );
}
