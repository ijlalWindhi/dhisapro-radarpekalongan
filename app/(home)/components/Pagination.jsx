export default function Pagination({
  setCurrentPage,
  currentPage,
  currentPost,
}) {
  console.log(currentPage?.length);
  return (
    <nav aria-label="Page navigation example" className="flex justify-center">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-blue-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage == 1 ? true : false}
          >
            Previous
          </button>
        </li>

        <li>
          <button
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-blue-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage == currentPost?.length ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
