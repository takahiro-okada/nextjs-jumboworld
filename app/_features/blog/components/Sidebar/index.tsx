import { LucideFolder, CalendarDays } from "lucide-react";
import Link from "next/link";

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
        <h2 className="text-lg font-bold mb-4">カテゴリー</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={category.name}>
              <Link
                href={`/column/category/${index}`}
                className="flex items-center"
              >
                <LucideFolder />
                <p className="ml-2 py-1 text-lg font-bold">{category.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h2 className="mb-4 text-lg font-bold ">投稿日</h2>
        <ul className="space-y-2">
          {archives.map((archive, index) => (
            <li key={archive.date}>
              <Link
                href={`/column/archive/${index}`}
                className="flex items-center"
              >
                <CalendarDays />
                <p className="hover:text-gray-600 text-lg font-bold ml-2 py-1">
                  {archive.date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
