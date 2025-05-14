import { message } from "antd";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
const base_URL = import.meta.env.VITE_BASE_URL;
export default function BlogCard({ post }) {
  const handleDelete = async (post_id) => {
    try {
      await axios.delete(`${base_URL}/api/v1/blog/delete/${post_id}`, {
        // params: {
        //   id: post_id,
        // },
      });
      message.success("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      message.error("Error deleting blog");
    }
  };

  return (
    <div className="w-1/5 h-auto bg-gray-700 p-5 rounded-lg shadow-lg shadow-blue-950 flex flex-col gap-5 cursor-pointer relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover rounded-lg mb-2"
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
