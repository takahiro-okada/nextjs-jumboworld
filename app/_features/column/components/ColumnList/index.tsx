import { Blog } from "@/app/_libs/microcms";
import BlogCard from "@/app/_features/column/components/ColumnCard";

type Props = {
  blogs: Blog[];
};

export default function ColumnList({ blogs }: Props) {
  if (!blogs || blogs.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
