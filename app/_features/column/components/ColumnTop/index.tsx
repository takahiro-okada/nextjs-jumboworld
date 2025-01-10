import ColumnCard from "@/app/_features/column/components/ColumnCard";
import Link from "next/link";
import { getBlogList } from "@/app/_libs/microcms";

export default async function ColumnTop() {
  const { contents: blogs } = await getBlogList();
  const posts = blogs.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex sm:flex-row justify-between items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">
            コラム
          </h2>
          <Link href="/column">一覧を見る</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {posts.slice(0, 3).map((blog) => (
            <ColumnCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
