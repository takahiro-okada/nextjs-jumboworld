import { BlogCard } from "@/app/_features/blog/components/BlogCard";
import { Button } from "@/app/_components/elements/Button";

export function Column() {
  const posts = [
    {
      id: 1,
      title: "知多半島のイベントに参加して感じたこと",
      date: "2024/12/01",
      tags: ["SHOPIFY", "DESIGN", "PHOTO", "PHOTO"],
    },
    {
      id: 2,
      title: "知多半島のイベントに参加して感じたこと",
      date: "2024/12/01",
      tags: ["SHOPIFY", "DESIGN", "PHOTO", "PHOTO"],
    },
    {
      id: 3,
      title: "知多半島のイベントに参加して感じたこと",
      date: "2024/12/01",
      tags: ["SHOPIFY", "DESIGN", "PHOTO", "PHOTO"],
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-0">
            コラム
          </h2>
          <Button href="/column">一覧を見る</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
