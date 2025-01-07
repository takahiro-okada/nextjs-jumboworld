import { Lightbulb, Eye, ScrollText } from "lucide-react";

export default function MissionVisionValues() {
  const credoItems = [
    {
      number: "1",
      title: "地域に寄り添うデジタル化を",
      description: [
        "テクノロジーの進化は止まることがない",
        "しかし、その本質は人々の暮らしを豊かにすること",
        "地域の文化や価値観を大切にしながら、",
        "デジタルの力で新しい可能性を切り拓こう",
      ],
    },
    {
      number: "2",
      title: "本質的な課題解決を追求する",
      description: [
        "表面的な改善だけでなく、",
        "お客様のビジネスの本質を理解し、",
        "長期的な成長につながるソリューションを提供する",
        "共に考え、共に成長する真のパートナーであろう",
      ],
    },
    {
      number: "3",
      title: "技術力は誠実さから",
      description: [
        "最新技術を追うだけでなく、",
        "基礎となる技術を深く理解し、",
        "お客様に最適なソリューションを提案できる",
        "確かな技術力を持ったプロフェッショナルであろう",
      ],
    },
    {
      number: "4",
      title: "挑戦する勇気を持とう",
      description: [
        "デジタルの世界は日々進化している",
        "失敗を恐れず、新しいことに挑戦し続けよう",
        "その姿勢がお客様の勇気にもなる",
        "共に成長できる関係を築いていこう",
      ],
    },
    {
      number: "5",
      title: "知多から世界へ",
      description: [
        "地域に根ざしながらも、視野は世界へ",
        "知多半島から世界に通用する",
        "技術とサービスを生み出そう",
        "地域の誇りとなる存在を目指そう",
      ],
    },
    {
      number: "6",
      title: "持続可能な成長を",
      description: [
        "急成長を追い求めるのではなく",
        "着実で持続可能な成長を大切にしよう",
        "社員の成長と会社の成長を両立させ、",
        "地域と共に歩んでいこう",
      ],
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-4 md:p-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16">
          <div className="text-center">
            <div className="inline-block p-3 bg-blue-100 rounded-full">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mt-4">ミッション</h2>
            <p className="font-bold text-lg max-w-2xl mx-auto mt-6">
              地域企業のデジタル化を支援し、知多半島の経済発展に貢献する。革新的なウェブソリューションを通じて、クライアントのビジネス成長を加速させる。
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-3 bg-green-100 rounded-full">
              <Eye className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mt-4">ビジョン</h2>
            <p className="font-bold text-lg max-w-2xl mx-auto mt-6">
              知多半島を日本有数のテクノロジーハブに変革する。地域に根ざしながらグローバルな視点を持ち、世界に通用する技術と創造性を発信し続ける。
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-3 bg-purple-100 rounded-full">
              <ScrollText className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold mt-4">CREDO</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-6">
              {credoItems.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-blue-900">
                    {item.title}
                  </h3>
                  <div className="space-y-2">
                    {item.description.map((line, i) => (
                      <p key={i} className="font-bold">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
