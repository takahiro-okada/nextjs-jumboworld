import { getDetail } from "@/libs/client";
import Image from "next/image";

export default async function BlogDetailPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const blog = await getDetail(blogId);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {blog.eyecatch && (
          <div className="relative h-64 sm:h-80 lg:h-96">
            <Image
              src={blog.eyecatch.url}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>{blog.publishedAt}</span>
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </div>
      </article>
    </div>
  );
}