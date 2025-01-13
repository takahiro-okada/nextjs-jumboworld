import { Metadata } from "next";
import { notFound } from "next/navigation";
import Pagination from "@/app/_features/column/components/Pagination";
import BlogCard from "@/app/_features/column/components/ColumnList";
import Sidebar from "@/app/_features/column/components/Sidebar";
import PageTitle from "@/app/_components/elements/PageTitle";
import { getBlogListByYearMonth } from "@/app/_libs/microcms";

type Props = {
  params: { date: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = params;
  const [year, month] = date.split("_");
  return {
    title: `コラム ${year}年${month}月`,
  };
}

export default async function ColumnPage({ params }: Props) {
  const { date } = params;
  const blogs = await getBlogListByYearMonth(date);

  if (!blogs || blogs.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10">
        <PageTitle title="コラム" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        <div className="w-full lg:w-3/4">
          <BlogCard blogs={blogs} />
          <Pagination />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
