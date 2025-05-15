import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function BlogGrid({ posts }) {
  const navigate = useNavigate();
  return (
    <section
      id="posts"
      className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3"
    >
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
          onClick={() => navigate(`/blog/${post._id}`)}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-xl font-bold mb-2 text-blue-900 dark:text-white">
              {post.title.substring(0, 10)}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.content.substring(0, 50)}
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{moment(post.createdAt).fromNow()}</span>
            </div>
            <a
              href={`/post/${post.id}`}
              className=" py-2  text-white   transition"
            >
              Read More...
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
