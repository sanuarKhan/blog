export default function Sidebar({ recentPosts, categories }) {
  return (
    <aside className="hidden md:block w-1/4 pl-8">
      {/* Recent Posts */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4 text-blue-900 dark:text-white">
          Recent Posts
        </h3>
        <ul className="space-y-2">
          {recentPosts.map((rp) => (
            <li key={rp.id}>
              <a
                href={`/post/${rp.id}`}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-500"
              >
                {rp.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4 text-blue-900 dark:text-white">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-200 px-3 py-1 rounded-full text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      {/* Newsletter */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
        <h3 className="font-semibold text-lg mb-2 text-blue-900 dark:text-white">
          Subscribe
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get the latest posts delivered to your inbox.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none"
          />
          <button className="bg-teal-500 text-white px-4 py-2 rounded-r-lg hover:bg-teal-600 transition">
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
