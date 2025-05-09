import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const base_URL = import.meta.env.VITE_BASE_URL;

export default function CreateBlog() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handle post request to create a blog
  const handlePost = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Create a FormData object to handle file upload
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("author", "khan"); // Consider getting this from user context/auth

      // Only append image if it exists
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        `${base_URL}/api/v1/blog/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      console.log("Blog created:", response.data);

      // Reset form
      setTitle("");
      setContent("");
      setImage(null);

      // Navigate to blog list
      navigate("/blog");
    } catch (error) {
      console.error("Error creating blog:", error);
      message.error("Error creating blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto h-full w-full flex flex-col gap-10 bg-gray-900 p-10 m-5">
      <h2 className="text-2xl font-bold text-center text-cyan-200">
        Post a Blog today
      </h2>
      <form className="flex flex-col gap-5" onSubmit={handlePost}>
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
                src={URL.createObjectURL(image)}
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
          disabled={loading || !title || !content}
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  );
}
