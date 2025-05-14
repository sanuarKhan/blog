import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const base_URL = import.meta.env.VITE_BASE_URL;

export default function UpdateBlog() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  console.log(loading);
  const navigate = useNavigate();
  const { id } = useParams();

  // handle post request to create a blog
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Create a FormData object to handle file upload
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("author", "khan"); // TODO

      // Only append image if it exists
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.put(
        `${base_URL}/api/v1/blog/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      console.log(" updated:", response.data);

      // Reset form
      setTitle("");
      setContent("");
      setImage(null);

      // Navigate to blog list
      navigate("/blog");
    } catch (error) {
      console.error("Error Updating blog:", error);
      message.error("Error Updating blog");
    } finally {
      setLoading(false);
    }
  };
  // const handleCancel = () => {
  //   navigate("/blog");
  // };
  const getCurrentBlog = async (id) => {
    try {
      const response = await axios.get(`${base_URL}/api/v1/blog/${id}`);
      const blog = response.data.data;
      setTitle(blog.title);
      setContent(blog.content);
      setImage(blog.image);
    } catch (error) {
      console.error("Error fetching blog:", error);
      message.error("Error fetching blog");
    }
  };
  useEffect(() => {
    getCurrentBlog(id);
  }, []);

  return (
    <div className="relative container mx-auto h-full w-full flex flex-col gap-10 bg-gray-900 p-10 m-5">
      <button
        onClick={() => navigate("/blog")}
        className="text-red-200 text-2xl bg-gray-800 absolute top-5 right-5"
      >
        Cancel <icon className="fa-solid fa-xmark"></icon>
      </button>
      <h2 className="text-2xl font-bold text-center text-cyan-200">
        Update a Blog
      </h2>
      <form className="flex flex-col gap-5" onSubmit={handleUpdate}>
        <div className="flex gap-10 justify-center items-center">
          <label
            className="flex justify-center items-center border-2 border-cyan-200 rounded-md w-1/3 h-50 text-2xl font-bold text-cyan-200"
            htmlFor="image"
          >
            <input
              className="hidden"
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImage(e.target.files[0]);
                }
              }}
            />
            {image ? (
              <img
                src={image}
                alt="Selected thumbnail"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-cyan-200">Upload a thumbnail</span>
            )}
          </label>
          <div className="flex flex-col gap-5 w-2/3">
            <input
              className="p-2 text-amber-50 text-3xl font-bold rounded-md border-2 border-cyan-200"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              name="content"
              placeholder="Content"
              className="h-40 p-2 text-amber-50 text-lg rounded-md border-2 border-cyan-200"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          className="w-full mt-5 p-2 rounded-md bg-emerald-400 hover:bg-emerald-500 transition-colors disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {console.log(loading)}
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
}
