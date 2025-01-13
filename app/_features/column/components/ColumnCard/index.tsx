// Card/index.tsx
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/_libs/utils";
import { Blog } from "@/app/_libs/microcms";
import Tag from "@/app/_components/elements/Tag";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden group">
      <Link href={`/column/${blog.id}`} className="block">
        <div className="relative">
          {blog.thumbnail && blog.thumbnail.url ? (
            <Image
              src={blog.thumbnail.url}
              alt="Thumbnail"
              className="aspect-video object-cover"
              width={blog.thumbnail.width}
              height={blog.thumbnail.height}
            />
          ) : (
            <Image
              src="/images/no-image.png"
              className="aspect-video object-cover"
              alt="No Image"
              width={1200}
              height={630}
            />
          )}
        </div>
        <div className="p-2 md:p-4">
          <h2 className="font-bold text-sm md:text-base line-clamp-2 group-hover:text-gray-600">
            {blog.title}
          </h2>
          {blog.category ? (
            <div className="flex flex-wrap gap-2 mt-2">
              <Tag tag={blog.category.name} />
            </div>
          ) : null}
          <time className="text-xs text-gray-500 mt-3 block md:text-sm">
            {formatDate(blog.createdAt)}
          </time>
        </div>
      </Link>
    </article>
  );
}
