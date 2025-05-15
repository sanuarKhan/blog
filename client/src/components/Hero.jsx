export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-blue-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 dark:text-white mb-4">
        Discover Inspiring Stories
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
        Read, learn, and grow with our curated blog posts.
      </p>
      <a
        href="#posts"
        className="px-6 py-3 bg-teal-500 text-white rounded-full font-semibold shadow-lg hover:bg-teal-600 transition"
      >
        Start Reading
      </a>
    </section>
  );
}
