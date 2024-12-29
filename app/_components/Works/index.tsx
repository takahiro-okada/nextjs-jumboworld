import Image from "next/image";
import { Button } from "../elements/Button";

export function Works() {
  const works = [
    { id: 1, title: "A社様", description: "常滑のECサイト、" },
    { id: 2, title: "A社様", description: "常滑のECサイト、" },
    { id: 3, title: "A社様", description: "常滑のECサイト、" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-0">
            制作実績
          </h2>
          <Button href="/works">一覧を見る</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group">
              <div className="aspect-video bg-gray-100 mb-4">
                <Image
                  src="/images/sample-company.jpg"
                  alt={work.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold mb-2 text-base sm:text-lg">
                {work.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                  #SHOPIFY
                </span>
                <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                  #DESIGN
                </span>
                <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                  #PHOTO
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
