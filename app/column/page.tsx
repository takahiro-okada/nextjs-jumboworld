import Pagination from "@/app/_features/blog/components/Pagination";
import BlogCard from "@/app/_features/blog/components/BlogCard";
import Sidebar from "@/app/_features/blog/components/Sidebar";
import posts from "@/app/_constants/sample-blog-data.json";
import PageTitle from "@/app/_components/elements/PageTitle";

export default function ColumnPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="mt-10">
          <PageTitle title="コラム" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
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
    </>
  );
}
