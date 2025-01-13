import Pagination from "@/app/_features/column/components/Pagination";
import BlogCard from "@/app/_features/column/components/ColumnList";
import Sidebar from "@/app/_features/column/components/Sidebar";
import PageTitle from "@/app/_components/elements/PageTitle";
import { getCategoryDetail, getBlogList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ColumnPage({ params }: Props) {
  const resolvedParams = await params;
  const category = await getCategoryDetail(resolvedParams.id).catch(notFound);

  const { contents: posts } = await getBlogList({
    limit: 6,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="mt-10">
          <PageTitle title="コラム" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="w-full lg:w-3/4">
            <BlogCard blogs={posts} />
            <Pagination />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
