import Link from "next/link";
import { getBlogs } from "@/libs/client";
import Image from "next/image";

export default async function BlogListPage() {
  const { contents } = await getBlogs();

  if (!contents || contents.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">記事がありません</h1>
      </div>
    );
  }

  console.log(contents);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          ブログ記事一覧
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contents.map((blog) => (
            <li
              key={blog.id}
              className=" shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <Link
                href={`/blogs/${blog.id}`}
                className="block p-6 hover:bg-gray-50"
              >
                <div className="relative h-48">
                  {blog.eyecatch && (
                    <div className="relative h-48">
                      <Image
                        src={blog.eyecatch.url}
                        alt=""
                        className="w-full h-full object-cover"
                        width={blog.eyecatch.width}
                        height={blog.eyecatch.height}
                      />
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span className="mr-4">{blog.publishedAt}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
