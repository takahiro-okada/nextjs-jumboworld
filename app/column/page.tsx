import { Pagination } from "@/app/_features/blog/components/Pagination";
import { BlogCard } from "@/app/_features/blog/components/BlogCard";
import { Sidebar } from "@/app/_features/blog/components/Sidebar";

export default function ColumnPage() {
  const posts = Array(12).fill({
    title: "知多半島のイベントに参加して感じたこと",
    date: "2024/12/01",
    tags: ["SHOPIFY", "DESIGN", "PHOTO", "PHOTO"],
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">コラム</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {posts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>

              <Pagination />
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
