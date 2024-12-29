import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export function WorkCard({
  title,
  description,
  imageUrl,
  tags,
}: WorkCardProps) {
  return (
    <article className="group">
      <Link href="/works/1/" className="block">
        <div className="aspect-video bg-gray-100 mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs bg-gray-100 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
