import { Check, Star, Shield } from "lucide-react";
import Image from "next/image";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingSectionProps {
  title: string;
  description: string;
  plans: PricingPlan[];
  expertiseInfo: string;
  maintenanceInfo: string;
}

export default function PriceSection({
  title,
  description,
  plans,
  expertiseInfo,
  maintenanceInfo,
}: PricingSectionProps) {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
        {title}
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-lg p-8 flex flex-col transform transition-all duration-300 hover:shadow-xl ${
              plan.isPopular ? "border-2 border-gray-300 relative" : ""
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-gray-800 text-white py-1 px-4 rounded-bl-xl rounded-tr-xl font-semibold text-sm">
                人気プラン
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {plan.name}
            </h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="text-4xl font-bold mb-6 text-gray-800">
              ¥{plan.price}
              <span className="text-lg font-normal text-gray-500">〜</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-gray-800 text-white rounded-lg py-3 font-semibold hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              お問い合わせ
            </button>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Star className="w-8 h-8 text-gray-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">当社の強み</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{expertiseInfo}</p>
          <div className="mx-auto max-w-36">
            <Image
              src="/images/price-expertise.svg"
              alt="Expertise illustration"
              width={300}
              height={300}
              className="mt-6 rounded-lg"
            />
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-gray-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">
              保守運用サポート
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{maintenanceInfo}</p>
          <div className="mx-auto max-w-36">
            <Image
              src="/images/price-maintenance.svg"
              alt="Maintenance support illustration"
              width={300}
              height={300}
              className="mt-6 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
