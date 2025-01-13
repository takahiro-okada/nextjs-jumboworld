import Link from "next/link";
import WorksGrid from "@/app/_features/works/components/WorksGrid";
import type { Work } from "@/app/_libs/microcms";

type WorksTopProps = {
  works: Work[];
};

export default function WorksTop({ works }: WorksTopProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">
            制作実績
          </h2>
          <Link href="/works">一覧を見る</Link>
        </div>
        <WorksGrid works={works.slice(0, 3)} />
      </div>
    </section>
  );
}
