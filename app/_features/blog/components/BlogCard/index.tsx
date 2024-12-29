import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  tags: string[];
}

export function BlogCard({ title, date, tags }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden group">
      <Link href="#" className="block">
        <div className="relative aspect-video">
          <Image
            src="/images/sample-cafe.jpg"
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold mb-2 text-lg line-clamp-2 group-hover:text-gray-600">
            {title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-black text-white rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          <time className="text-sm text-gray-500">{date}</time>
        </div>
      </Link>
    </article>
  );
}
