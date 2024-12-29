import Image from "next/image";
import { PricingCard } from "@/app/_features/price/components/PriceCard";

export default function PricingPage() {
  const plans = [
    {
      name: "ライトプラン",
      description: "はじめてWEBサイトを作る方におすすめ！",
      price: "300,000",
      features: [
        "TOPページ",
        "TOPページ",
        "TOPページ",
        "TOPページ",
        "TOPページ",
      ],
    },
    {
      name: "スタンダード",
      description: "はじめてWEBサイトを作る方におすすめ！",
      price: "300,000",
      features: [
        "TOPページ",
        "TOPページ",
        "TOPページ",
        "TOPページ",
        "TOPページ",
      ],
    },
    {
      name: "アドバンス",
      description: "はじめてWEBサイトを作る方におすすめ！",
      price: "300,000",
      features: [
        "TOPページ",
        "TOPページ",
        "TOPページ",
        "TOPページ",
        "TOPページ",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">料金</h1>
            <p className="text-gray-600">初めてWEBサイトを作るならにオススス</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <div className="bg-white rounded-lg p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <Image
                    src="/placeholder.svg"
                    alt="Next Generation Website"
                    width={400}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">
                    次世代のWEBサイト構築
                  </h2>
                  <p className="text-gray-600">
                    次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築次世代のWEBサイト構築
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
