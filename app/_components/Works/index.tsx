import Link from "next/link";

export default function Works() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">
            制作実績
          </h2>
          <Link href="/works">一覧を見る</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"></div>
      </div>
    </section>
  );
}
