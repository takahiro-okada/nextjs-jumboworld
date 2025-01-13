import Image from "next/image";
import type { Work } from "@/app/_libs/microcms";
import Tag from "@/app/_components/elements/Tag";

type WorkCardProps = {
  work: Work;
  onClick: () => void;
};

export default function WorkCard({ work, onClick }: WorkCardProps) {
  return (
    <article className="group cursor-pointer" onClick={onClick}>
      <div className="aspect-video bg-gray-100 mb-4 overflow-hidden rounded-lg">
        <div className="relative">
          {work.thumbnail && work.thumbnail.url ? (
            <Image
              src={work.thumbnail.url}
              alt="Thumbnail"
              className="aspect-video object-cover"
              width={work.thumbnail.width}
              height={work.thumbnail.height}
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
      </div>
      <h3 className="text-xl font-bold mb-2">{work.title}</h3>
      <div className="flex flex-wrap gap-2">
        <Tag tag={work.category} />
      </div>
    </article>
  );
}
