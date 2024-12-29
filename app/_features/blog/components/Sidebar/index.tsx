interface Category {
  name: string;
  count: number;
}

interface Archive {
  date: string;
  count: number;
}

export function Sidebar() {
  const categories: Category[] = [
    { name: "イベント", count: 5 },
    { name: "毎月の振り返り", count: 3 },
    { name: "家族のこと", count: 2 },
  ];

  const archives: Archive[] = [
    { date: "2024年12月", count: 3 },
    { date: "2024年11月", count: 4 },
    { date: "2024年10月", count: 5 },
    { date: "2024年9月", count: 2 },
  ];

  return (
    <aside className="w-full lg:w-1/4 space-y-8">
      <div className="bg-white rounded-lg p-6">
        <h2 className="font-bold mb-4">カテゴリー</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="flex items-center">
              <input
                type="checkbox"
                id={category.name}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label htmlFor={category.name} className="ml-2 text-sm">
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h2 className="font-bold mb-4">投稿日</h2>
        <ul className="space-y-2">
          {archives.map((archive) => (
            <li key={archive.date}>
              <button className="text-sm hover:text-gray-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
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
                {archive.date}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
