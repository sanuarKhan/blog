import { message } from "antd";
import axios from "axios";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
const base_URL = import.meta.env.VITE_BASE_URL;
export default function BlogCard({ post }) {
  const navigate = useNavigate();
  const handleDelete = async (post_id) => {
    try {
      const res = await axios.delete(
        `${base_URL}/api/v1/blog/delete/${post_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        message.error(error.response.data.message);
      } else {
        message.error("Error deleting blog");
      }
    }
  };

  return (
    <div className="w-1/5 h-auto bg-gray-700 p-5 rounded-lg shadow-lg shadow-blue-950 flex flex-col gap-5 cursor-pointer relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-25 object-cover rounded-lg mb-2"
      />
      <div className="flex flex-col gap-1">
        <div onClick={() => navigate(`/blog/${post._id}`)}>
          <h2 className="text-lg font-bold text-white">
            {post.title.substring(0, 20)}
          </h2>
          <p className="text-gray-300">
            {post.content.substring(0, 100) + "..."}
          </p>
          <div>
            <span className="text-gray-300 me-2">
              {moment(post.createdAt).fromNow()}
            </span>

            <span className="text-gray-300 me-2">by {post.author}</span>
          </div>
        </div>
        <div className="flex justify-between  py-5 text-white">
          <Link to={`/update/${post._id}`}>
            <button className="cursor-pointer text-fuchsia-500">
              Edit <icon className="fa-solid fa-pen-to-square"></icon>
            </button>
          </Link>
          <Link onClick={() => handleDelete(post._id)}>
            <button className="cursor-pointer text-red-500">
              Delete <icon className="fa-solid fa-trash"></icon>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
