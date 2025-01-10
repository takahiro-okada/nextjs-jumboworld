import Pagination from "@/app/_features/column/components/Pagination";
import BlogList from "@/app/_features/column/components/ColumnList";
import Sidebar from "@/app/_features/column/components/Sidebar";
import PageTitle from "@/app/_components/elements/PageTitle";
import { getBlogList } from "@/app/_libs/microcms";

export default async function BlogPage() {
  const { contents: blogs } = await getBlogList();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="mt-10">
          <PageTitle title="コラム" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="w-full lg:w-3/4">
            <BlogList blogs={blogs} />
            <Pagination />
          </div>

          <Sidebar />
        </div>
      </div>
    </>
  );
}
