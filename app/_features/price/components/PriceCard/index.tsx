import Button from "@/app/_components/elements/Button";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
}

export default function PricingCard({
  name,
  description,
  price,
  features,
}: PricingCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-2xl font-bold">{price}</span>
        <span className="text-gray-600">円〜</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600">
            <span className="w-full border-b border-gray-200 py-2">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button href="/contact">お問い合わせ</Button>
    </div>
  );
}
