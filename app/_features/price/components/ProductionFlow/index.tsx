import {
  MessageSquare,
  Users,
  FileText,
  Handshake,
  Code,
  CheckSquare,
  Package,
  Headphones,
} from "lucide-react";

export default function ProductionFlow() {
  const steps = [
    {
      title: "お問い合わせ",
      description: "まずはお気軽にご連絡ください。ご要望をお聞かせください。",
    },
    {
      title: "ヒアリング",
      description: "詳細なご要望や目的、予算、納期などについてお伺いします。",
    },
    {
      title: "プラン・お見積り提案",
      description:
        "ヒアリング内容を基に、最適なプランとお見積りを提案いたします。",
    },
    {
      title: "ご契約",
      description: "提案内容にご納得いただけましたら、契約を締結いたします。",
    },
    {
      title: "制作開始",
      description: "デザインやコーディングなど、実際の制作作業に入ります。",
    },
    {
      title: "中間報告・修正",
      description: "制作途中で進捗報告を行い、必要に応じて修正を行います。",
    },
    {
      title: "納品・検収",
      description: "完成したサイトを納品し、ご確認いただきます。",
    },
    {
      title: "アフターサポート",
      description: "納品後も継続的なサポートやメンテナンスを提供いたします。",
    },
  ];

  function getStepIcon(index: number) {
    const icons = [
      <MessageSquare key="message" className="w-12 h-12" />,
      <Users key="users" className="w-12 h-12" />,
      <FileText key="file" className="w-12 h-12" />,
      <Handshake key="handshake" className="w-12 h-12" />,
      <Code key="code" className="w-12 h-12" />,
      <CheckSquare key="check" className="w-12 h-12" />,
      <Package key="package" className="w-12 h-12" />,
      <Headphones key="headphones" className="w-12 h-12" />,
    ];
    return icons[index];
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-center mb-12">制作の流れ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div className="absolute top-0 right-0 bg-black text-white text-sm font-bold py-1 px-3 rounded-tr-lg rounded-bl-lg">
              STEP {index + 1}
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className=" w-24 h-24 rounded-full bg-[#F8F8F8] text-black flex items-center justify-center">
                {getStepIcon(index)}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
