export default function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <button className="p-2 rounded-lg border enabled:hover:bg-gray-100 disabled:opacity-50">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="flex space-x-1">
        <button
          className={`px-4 py-2 rounded-lgbg-black text-white border hover:bg-gray-100"
            }`}
        >
          1
        </button>
      </div>

      <button className="p-2 rounded-lg border enabled:hover:bg-gray-100 disabled:opacity-50">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
