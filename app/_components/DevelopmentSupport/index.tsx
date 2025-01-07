import { Code, ShoppingBag, Wrench, Zap, Puzzle, MapPin } from "lucide-react";
import Button from "@/app/_components/elements/Button";

export default function DevelopmentSupport() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Webサイト制作",
      description:
        "企業サイト、ランディングページ、キャンペーンサイトなど、あらゆるWebサイト制作に対応。モダンフロントエンド技術で高品質なユーザー体験を提供。",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-green-600" />,
      title: "Shopify ECサイト構築",
      description:
        "Shopifyを活用したECサイト構築で、オンラインビジネスを成功に導きます。戦略的な設計と魅力的なデザインで集客・購買促進を支援。",
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-600" />,
      title: "Web開発サポート",
      description:
        "Webエンジニアとしての豊富な経験を活かし、受託制作や開発におけるスポット的な支援も承っております。",
    },
  ];

  const reasons = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "最新技術への対応力",
      description:
        "常に最新のWeb技術を追求し、高品質でパフォーマンスの高いWebサイトを提供いたします。",
    },
    {
      icon: <Puzzle className="w-6 h-6 text-indigo-500" />,
      title: "柔軟な対応力",
      description:
        "お客様のニーズに合わせて、柔軟に対応いたします。小規模な修正から大規模な開発まで、お気軽にご相談ください。",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: "地域密着型",
      description:
        "知多半島を中心に、地域のお客様に寄り添った丁寧なサービスを提供いたします。",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#a0e8f5] to-[#ffe0b2]">
      {/* <div className="py-12 sm:py-16 md:py-24 bg-[url('/images/noise.png')]"> */}
      <div className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            技術力と柔軟性を活かした開発サポート
          </h2>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-lg  max-w-3xl mx-auto mt-12">
              JUMBO
              WORLDは、知多半島を拠点に、Webサイト・ECサイト制作を通じてお客様のビジネスを支援するWeb制作事務所です。
            </p>
            <p className="text-lg  max-w-3xl mx-auto mt-5">
              最新技術を駆使したWebサイト制作からShopifyでのECサイト構築まで、幅広いニーズに対応いたします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-12  gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4 text-center">
                  {service.title}
                </h3>
                <p className="text-center mt-2">{service.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-center mt-16">
            JUMBO WORLDが選ばれる理由
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white rounded-full p-4 shadow-md">
                  {reason.icon}
                </div>
                <h4 className="text-lg font-semibold mt-4 text-center">
                  {reason.title}
                </h4>
                <p className="text-center mt-2">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg">
              お客様のビジネスを成功に導くWebソリューションを提供いたします。
              <br />
              Webサイト制作・ECサイト構築に関するご相談は、お気軽にお問い合わせください。
            </p>
            <div className="mt-16">
              <Button href="/contact">お問い合わせ</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
