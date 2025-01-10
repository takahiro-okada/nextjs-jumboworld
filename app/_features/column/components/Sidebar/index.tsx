import { LucideFolder, CalendarDays } from "lucide-react";
import Link from "next/link";
import {
  Blog,
  getBlogListByMonth,
  getAllCategoryList,
} from "@/app/_libs/microcms";

interface ArchiveData {
  props: {
    blog: Blog[];
    monthlyIndex: {
      [key: string]: Blog[];
    };
  };
}

export default async function Sidebar() {
  const categories = await getAllCategoryList();

  const archiveData: ArchiveData = await getBlogListByMonth();
  const archives = Object.entries(archiveData.props.monthlyIndex).map(
    ([key, value]) => ({
      date: key,
      count: value.length,
    })
  );

  function formatDate(dateString: string): string {
    const [year, month] = dateString.split("_");
    return `${year}年${parseInt(month)}月`;
  }

  return (
    <aside className="w-full lg:w-1/4 space-y-8">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">カテゴリー</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={`/column/category/${category.id}`}
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
          {archives.map((archive) => (
            <li key={archive.date}>
              <Link
                href={`/column/archive/${archive.date}`}
                className="flex items-center"
              >
                <CalendarDays />
                <p className="hover:text-gray-600 text-lg font-bold ml-2 py-1">
                  {formatDate(archive.date)} ({archive.count})
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
