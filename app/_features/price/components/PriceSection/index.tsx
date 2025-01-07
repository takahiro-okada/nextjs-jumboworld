import Button from "@/app/_components/elements/Button";
import { Check, Star, Shield } from "lucide-react";
import Image from "next/image";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface PricingSectionProps {
  title: string;
  description: string;
  plans: PricingPlan[];
  expertiseInfo: string;
  maintenanceInfo: string;
  expertiseIllustration: string;
  maintenanceIllustration: string;
}

export default function PriceSection({
  title,
  description,
  plans,
  expertiseInfo,
  maintenanceInfo,
  expertiseIllustration,
  maintenanceIllustration,
}: PricingSectionProps) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
      <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-lg p-8 flex flex-col transform transition-all duration-300 hover:shadow-xl`}
          >
            <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
            <p className="text-gray-600 mt-2">{plan.description}</p>
            <div className="text-4xl font-bold mt-6 text-gray-800">
              ¥{plan.price}
              <span className="text-lg font-normal text-gray-500">〜</span>
            </div>
            <ul className="space-y-4 mt-4 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Button href="/contact">お問い合わせ</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Star className="w-8 h-8 text-gray-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">当社の強み</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{expertiseInfo}</p>
          <div className="mx-auto max-w-96 flex justify-center items-center">
            <Image
              src={`/images/${expertiseIllustration}`}
              alt="Expertise illustration"
              width={600}
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
          <div className="mx-auto max-w-96 flex justify-center items-center">
            <Image
              src={`/images/${maintenanceIllustration}`}
              alt="Maintenance support illustration"
              width={600}
              height={300}
              className="mt-6 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
